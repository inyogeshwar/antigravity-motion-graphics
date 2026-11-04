# MotionOS Local AI Models Registry

MotionOS runs 100% locally and offline. It does not send video or voice data to any external cloud API.

---

## 📦 Installed Models & Storage Breakdown

| Model | Purpose | Format | Size | Offline Path |
|---|---|---|---|---|
| **Faster-Whisper Large V3 Turbo** | Millisecond speech-to-text transcription | CTranslate2 / Bin | ~1.5 GB | `models/whisper/model.bin` |
| **RobustVideoMatting (RVM)** | Green-screen-free subject segmentation & cutout | ONNX (MobileNetV3) | 14.28 MB | `models/matting/rvm_mobilenetv3_fp32.onnx` |
| **CAM++ 3D-Speaker** | Multi-speaker diarization & voice clustering | ONNX (VoxCeleb) | 28.23 MB | `models/speaker/campplus_sv_en_voxceleb_16k.onnx` |
| **YuNet Face Detector** | Real-time face detection & 5-point landmarks | ONNX | 0.22 MB | `models/face/yunet.onnx` |
| **MediaPipe BlazeFace** | Fast bounding-box face locator | TFLite | 0.22 MB | `models/face/blaze_face_short_range.tflite` |
| **MediaPipe Selfie Segmenter** | Portrait silhouette mask for depth-sandwich text | TFLite | 0.24 MB | `models/face/selfie_segmenter.tflite` |

**Total Local Models Storage:** ~1.59 GB

---

## ⚡ Automated Setup & One-Click Download

To automatically download and bind all models:

```bash
# Download all models (including Whisper Large V3 Turbo)
npm run setup-models

# Or download only lightweight CV & matting models (~43 MB)
node scripts/setup_models.mjs --quick
```

> **Note on GitHub:** The large `model.bin` (1.5 GB) exceeds GitHub's 100 MB per-file limit and is excluded via `.gitignore`. Running `npm run setup-models` downloads it directly on first clone.
