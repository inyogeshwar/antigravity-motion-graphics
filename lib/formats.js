/**
 * MotionOS - Central media format registry
 *
 * One place that knows every container/extension the studio can read and write,
 * so the CLI, the vibe pipeline, the renderer and the SFX mixer all agree.
 *
 * FFmpeg (and the bundled Playwright renderer) decode/encode far more than the
 * lists below, but these are the first-class formats we advertise, test and
 * default to. Anything FFmpeg supports still works when passed explicitly.
 */

import path from 'node:path';

// --- inputs ---------------------------------------------------------------

export const VIDEO_EXTENSIONS = [
  'mp4', 'm4v', 'mov', 'mkv', 'webm', 'avi', 'mpg', 'mpeg', 'm2v', 'wmv',
  'flv', 'ts', 'm2ts', 'mts', '3gp', '3g2', 'ogv', 'vob', 'mxf', 'gif'
];

export const AUDIO_EXTENSIONS = [
  'wav', 'mp3', 'm4a', 'aac', 'flac', 'ogg', 'oga', 'opus', 'wma', 'aiff',
  'aif', 'amr', 'ac3', 'mka'
];

export const IMAGE_EXTENSIONS = [
  'png', 'jpg', 'jpeg', 'webp', 'avif', 'bmp', 'tif', 'tiff', 'heic', 'heif', 'svg'
];

// --- outputs --------------------------------------------------------------
// Each entry tells the renderer/SFX mixer how to encode that container.

export const OUTPUT_FORMATS = {
  // video containers
  mp4: { kind: 'video', vcodec: ['libx264'], args: ['-pix_fmt', 'yuv420p', '-movflags', '+faststart'], acodec: ['-c:a', 'aac', '-b:a', '192k'] },
  m4v: { kind: 'video', vcodec: ['libx264'], args: ['-pix_fmt', 'yuv420p', '-movflags', '+faststart'], acodec: ['-c:a', 'aac', '-b:a', '192k'] },
  mov: { kind: 'video', vcodec: ['libx264'], args: ['-pix_fmt', 'yuv420p'], acodec: ['-c:a', 'aac', '-b:a', '192k'], alphaVcodec: ['-c:v', 'prores_ks', '-profile:v', '4', '-pix_fmt', 'yuva444p10le', '-vendor', 'apl0'] },
  mkv: { kind: 'video', vcodec: ['libx264'], args: ['-pix_fmt', 'yuv420p'], acodec: ['-c:a', 'aac', '-b:a', '192k'] },
  webm: { kind: 'video', vcodec: ['libvpx-vp9'], args: ['-pix_fmt', 'yuv420p', '-b:v', '0', '-row-mt', '1'], acodec: ['-c:a', 'libopus', '-b:a', '160k'], noPreset: true },
  ogv: { kind: 'video', vcodec: ['libtheora'], args: [], acodec: ['-c:a', 'libvorbis'] },
  avi: { kind: 'video', vcodec: ['mpeg4'], args: ['-qscale:v', '3'], acodec: ['-c:a', 'libmp3lame', '-b:a', '192k'], noPreset: true },
  gif: { kind: 'gif' },

  // audio containers
  wav: { kind: 'audio', acodec: ['-c:a', 'pcm_s16le'] },
  mp3: { kind: 'audio', acodec: ['-c:a', 'libmp3lame', '-b:a', '192k'] },
  m4a: { kind: 'audio', acodec: ['-c:a', 'aac', '-b:a', '192k'] },
  aac: { kind: 'audio', acodec: ['-c:a', 'aac', '-b:a', '192k'] },
  flac: { kind: 'audio', acodec: ['-c:a', 'flac'] },
  ogg: { kind: 'audio', acodec: ['-c:a', 'libvorbis', '-q:a', '5'] },
  oga: { kind: 'audio', acodec: ['-c:a', 'libvorbis', '-q:a', '5'] },
  opus: { kind: 'audio', acodec: ['-c:a', 'libopus', '-b:a', '160k'] }
};

// --- helpers --------------------------------------------------------------

export function extensionOf(file) {
  return path.extname(file || '').toLowerCase().replace(/^\./, '');
}

export function isVideo(file) {
  return VIDEO_EXTENSIONS.includes(extensionOf(file));
}

export function isAudio(file) {
  return AUDIO_EXTENSIONS.includes(extensionOf(file));
}

export function isImage(file) {
  return IMAGE_EXTENSIONS.includes(extensionOf(file));
}

/** True for any media file we can inspect, transcribe or edit. */
export function isMedia(file) {
  return isVideo(file) || isAudio(file) || isImage(file);
}

/** Case-insensitive regex matching raw footage filenames by extension. */
export function videoFileRegex(flags = 'i') {
  return new RegExp('\\.(' + VIDEO_EXTENSIONS.join('|') + ')$', flags);
}

/** Human-readable list, e.g. "mp4, mov, mkv, ...". */
export function formatList(kind = 'video') {
  if (kind === 'audio') return AUDIO_EXTENSIONS.join(', ');
  if (kind === 'image') return IMAGE_EXTENSIONS.join(', ');
  return VIDEO_EXTENSIONS.join(', ');
}

export function outputKind(file) {
  return OUTPUT_FORMATS[extensionOf(file)]?.kind || 'video';
}

export function isGifOutput(file) {
  return outputKind(file) === 'gif';
}

/**
 * FFmpeg video-encoding arguments for an output path.
 * Falls back to MP4/H.264 settings for unknown containers.
 */
export function videoEncodeArgs(file, { crf = 18, preset = 'faster', alpha = false } = {}) {
  const ext = extensionOf(file);
  const fmt = OUTPUT_FORMATS[ext];
  if (ext === 'mov' && alpha && fmt?.alphaVcodec) return [...fmt.alphaVcodec];
  if (!fmt || fmt.kind !== 'video') {
    return ['-c:v', 'libx264', '-preset', preset, '-crf', String(crf), '-pix_fmt', 'yuv420p', '-movflags', '+faststart'];
  }
  const args = [...fmt.vcodec];
  if (!fmt.noPreset) args.push('-preset', preset, '-crf', String(crf));
  else if (ext === 'webm') args.push('-crf', String(crf));
  args.push(...fmt.args);
  return args;
}

/** FFmpeg audio-encoding arguments for an output path (defaults to 16-bit WAV). */
export function audioEncodeArgs(file) {
  const fmt = OUTPUT_FORMATS[extensionOf(file)];
  if (fmt?.kind === 'audio') return [...fmt.acodec];
  return ['-c:a', 'pcm_s16le'];
}
