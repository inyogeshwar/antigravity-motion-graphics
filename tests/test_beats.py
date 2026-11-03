"""Unit tests for beats.py synthetic beat grid."""

import unittest
from beats import generate_synthetic_grid


class TestBeats(unittest.TestCase):
    def test_synthetic_grid_structure(self):
        result = generate_synthetic_grid(dur=4.0, bpm=120.0)
        self.assertEqual(result["bpm"], 120.0)
        self.assertTrue(result["synthetic"])
        # 120 BPM = 0.5s per beat. In 4.0s: 8 beats (0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5)
        self.assertEqual(len(result["beats"]), 8)
        self.assertEqual(result["beats"][0], 0.0)
        self.assertEqual(result["beats"][1], 0.5)

    def test_downbeats_slicing(self):
        result = generate_synthetic_grid(dur=4.0, bpm=120.0)
        # Every 4th beat is a downbeat (0.0, 2.0)
        self.assertEqual(result["downbeats"], [0.0, 2.0])


if __name__ == "__main__":
    unittest.main()
