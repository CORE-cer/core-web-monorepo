// Generated from src/grammar/ceql/CEQLQueryParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CEQLQueryParserListener from './CEQLQueryParserListener.js';
const serializedATN = [
  4, 1, 91, 567, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2,
  5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11,
  7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16,
  2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22,
  7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26, 2, 27, 7, 27,
  2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2, 33,
  7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38,
  2, 39, 7, 39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44,
  7, 44, 2, 45, 7, 45, 2, 46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49,
  2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7, 52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55,
  7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2, 59, 7, 59, 2, 60, 7, 60,
  2, 61, 7, 61, 1, 0, 1, 0, 5, 0, 127, 8, 0, 10, 0, 12, 0, 130, 9, 0, 1, 0, 1,
  0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 3, 2, 139, 8, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,
  2, 1, 2, 1, 2, 3, 2, 148, 8, 2, 1, 2, 1, 2, 3, 2, 152, 8, 2, 1, 2, 1, 2, 1, 2,
  3, 2, 157, 8, 2, 1, 2, 1, 2, 3, 2, 161, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
  3, 3, 3, 169, 8, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 5, 4, 176, 8, 4, 10, 4, 12,
  4, 179, 9, 4, 3, 4, 181, 8, 4, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 187, 8, 5, 10, 5,
  12, 5, 190, 9, 5, 3, 5, 192, 8, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 3, 6,
  200, 8, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6,
  1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 221, 8, 6, 10, 6, 12, 6,
  224, 9, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 234, 8, 7, 1,
  8, 1, 8, 1, 8, 5, 8, 239, 8, 8, 10, 8, 12, 8, 242, 9, 8, 1, 9, 1, 9, 1, 9, 3,
  9, 247, 8, 9, 1, 10, 1, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11,
  1, 11, 1, 11, 1, 11, 3, 11, 261, 8, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1,
  11, 5, 11, 269, 8, 11, 10, 11, 12, 11, 272, 9, 11, 1, 12, 1, 12, 1, 12, 1, 12,
  1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12,
  1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3, 12, 297, 8, 12, 1,
  12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 3,
  12, 310, 8, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 5, 12, 318, 8, 12,
  10, 12, 12, 12, 321, 9, 12, 1, 13, 1, 13, 3, 13, 325, 8, 13, 1, 14, 1, 14, 1,
  14, 3, 14, 330, 8, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15,
  1, 15, 3, 15, 341, 8, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 5, 15,
  349, 8, 15, 10, 15, 12, 15, 352, 9, 15, 1, 16, 1, 16, 1, 16, 1, 16, 1, 16, 1,
  16, 1, 16, 1, 16, 3, 16, 362, 8, 16, 1, 17, 1, 17, 1, 17, 5, 17, 367, 8, 17,
  10, 17, 12, 17, 370, 9, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17,
  1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 1, 17, 3, 17, 385, 8, 17, 1, 18, 1, 18, 1,
  18, 5, 18, 390, 8, 18, 10, 18, 12, 18, 393, 9, 18, 1, 19, 1, 19, 1, 19, 3, 19,
  398, 8, 19, 1, 20, 1, 20, 1, 20, 1, 21, 3, 21, 404, 8, 21, 1, 21, 3, 21, 407,
  8, 21, 1, 21, 3, 21, 410, 8, 21, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23, 1,
  24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 25, 1, 25, 1, 25, 1, 26, 1, 26, 1, 26, 3,
  26, 429, 8, 26, 1, 27, 1, 27, 1, 27, 3, 27, 434, 8, 27, 1, 27, 1, 27, 1, 28,
  1, 28, 1, 29, 1, 29, 1, 30, 1, 30, 1, 31, 1, 31, 1, 32, 1, 32, 1, 33, 1, 33,
  3, 33, 450, 8, 33, 1, 34, 1, 34, 1, 35, 1, 35, 1, 36, 1, 36, 1, 37, 1, 37, 1,
  37, 1, 37, 1, 38, 1, 38, 1, 38, 5, 38, 465, 8, 38, 10, 38, 12, 38, 468, 9, 38,
  1, 39, 4, 39, 471, 8, 39, 11, 39, 12, 39, 472, 1, 40, 1, 40, 3, 40, 477, 8,
  40, 1, 41, 1, 41, 3, 41, 481, 8, 41, 1, 42, 1, 42, 1, 42, 1, 42, 1, 43, 1, 43,
  1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 3, 43, 494, 8, 43, 1, 44, 1, 44, 1, 44, 1,
  44, 3, 44, 500, 8, 44, 1, 45, 1, 45, 1, 46, 1, 46, 1, 46, 1, 46, 1, 47, 1, 47,
  1, 47, 1, 48, 1, 48, 1, 48, 1, 49, 1, 49, 1, 49, 3, 49, 517, 8, 49, 1, 50, 1,
  50, 3, 50, 521, 8, 50, 1, 50, 4, 50, 524, 8, 50, 11, 50, 12, 50, 525, 1, 50,
  1, 50, 1, 51, 1, 51, 1, 51, 3, 51, 533, 8, 51, 1, 52, 1, 52, 1, 52, 1, 52, 1,
  53, 1, 53, 1, 54, 1, 54, 3, 54, 543, 8, 54, 1, 55, 1, 55, 1, 55, 1, 56, 1, 56,
  1, 57, 1, 57, 1, 57, 3, 57, 553, 8, 57, 1, 58, 1, 58, 1, 58, 1, 59, 1, 59, 1,
  60, 1, 60, 1, 61, 4, 61, 563, 8, 61, 11, 61, 12, 61, 564, 1, 61, 0, 4, 12, 22,
  24, 30, 62, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
  36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72,
  74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108,
  110, 112, 114, 116, 118, 120, 122, 0, 9, 1, 0, 37, 42, 1, 0, 41, 42, 1, 0, 33,
  34, 2, 0, 32, 32, 35, 36, 2, 0, 1, 6, 8, 31, 2, 0, 76, 77, 79, 80, 5, 0, 66,
  66, 68, 71, 73, 75, 78, 80, 82, 82, 4, 0, 66, 66, 68, 71, 73, 75, 78, 80, 1,
  0, 85, 90, 588, 0, 128, 1, 0, 0, 0, 2, 133, 1, 0, 0, 0, 4, 136, 1, 0, 0, 0, 6,
  168, 1, 0, 0, 0, 8, 180, 1, 0, 0, 0, 10, 191, 1, 0, 0, 0, 12, 199, 1, 0, 0, 0,
  14, 225, 1, 0, 0, 0, 16, 235, 1, 0, 0, 0, 18, 246, 1, 0, 0, 0, 20, 248, 1, 0,
  0, 0, 22, 260, 1, 0, 0, 0, 24, 309, 1, 0, 0, 0, 26, 324, 1, 0, 0, 0, 28, 329,
  1, 0, 0, 0, 30, 340, 1, 0, 0, 0, 32, 361, 1, 0, 0, 0, 34, 384, 1, 0, 0, 0, 36,
  386, 1, 0, 0, 0, 38, 397, 1, 0, 0, 0, 40, 399, 1, 0, 0, 0, 42, 403, 1, 0, 0,
  0, 44, 411, 1, 0, 0, 0, 46, 414, 1, 0, 0, 0, 48, 417, 1, 0, 0, 0, 50, 420, 1,
  0, 0, 0, 52, 425, 1, 0, 0, 0, 54, 433, 1, 0, 0, 0, 56, 437, 1, 0, 0, 0, 58,
  439, 1, 0, 0, 0, 60, 441, 1, 0, 0, 0, 62, 443, 1, 0, 0, 0, 64, 445, 1, 0, 0,
  0, 66, 449, 1, 0, 0, 0, 68, 451, 1, 0, 0, 0, 70, 453, 1, 0, 0, 0, 72, 455, 1,
  0, 0, 0, 74, 457, 1, 0, 0, 0, 76, 461, 1, 0, 0, 0, 78, 470, 1, 0, 0, 0, 80,
  474, 1, 0, 0, 0, 82, 480, 1, 0, 0, 0, 84, 482, 1, 0, 0, 0, 86, 493, 1, 0, 0,
  0, 88, 499, 1, 0, 0, 0, 90, 501, 1, 0, 0, 0, 92, 503, 1, 0, 0, 0, 94, 507, 1,
  0, 0, 0, 96, 510, 1, 0, 0, 0, 98, 516, 1, 0, 0, 0, 100, 518, 1, 0, 0, 0, 102,
  532, 1, 0, 0, 0, 104, 534, 1, 0, 0, 0, 106, 538, 1, 0, 0, 0, 108, 542, 1, 0,
  0, 0, 110, 544, 1, 0, 0, 0, 112, 547, 1, 0, 0, 0, 114, 552, 1, 0, 0, 0, 116,
  554, 1, 0, 0, 0, 118, 557, 1, 0, 0, 0, 120, 559, 1, 0, 0, 0, 122, 562, 1, 0,
  0, 0, 124, 127, 3, 4, 2, 0, 125, 127, 3, 2, 1, 0, 126, 124, 1, 0, 0, 0, 126,
  125, 1, 0, 0, 0, 127, 130, 1, 0, 0, 0, 128, 126, 1, 0, 0, 0, 128, 129, 1, 0,
  0, 0, 129, 131, 1, 0, 0, 0, 130, 128, 1, 0, 0, 0, 131, 132, 5, 0, 0, 1, 132,
  1, 1, 0, 0, 0, 133, 134, 5, 62, 0, 0, 134, 135, 6, 1, -1, 0, 135, 3, 1, 0, 0,
  0, 136, 138, 5, 26, 0, 0, 137, 139, 3, 6, 3, 0, 138, 137, 1, 0, 0, 0, 138,
  139, 1, 0, 0, 0, 139, 140, 1, 0, 0, 0, 140, 141, 3, 8, 4, 0, 141, 142, 3, 10,
  5, 0, 142, 143, 5, 30, 0, 0, 143, 147, 3, 12, 6, 0, 144, 145, 5, 23, 0, 0,
  145, 146, 5, 5, 0, 0, 146, 148, 3, 14, 7, 0, 147, 144, 1, 0, 0, 0, 147, 148,
  1, 0, 0, 0, 148, 151, 1, 0, 0, 0, 149, 150, 5, 31, 0, 0, 150, 152, 3, 38, 19,
  0, 151, 149, 1, 0, 0, 0, 151, 152, 1, 0, 0, 0, 152, 156, 1, 0, 0, 0, 153, 154,
  5, 6, 0, 0, 154, 155, 5, 5, 0, 0, 155, 157, 3, 18, 9, 0, 156, 153, 1, 0, 0, 0,
  156, 157, 1, 0, 0, 0, 157, 160, 1, 0, 0, 0, 158, 159, 5, 7, 0, 0, 159, 161, 3,
  20, 10, 0, 160, 158, 1, 0, 0, 0, 160, 161, 1, 0, 0, 0, 161, 5, 1, 0, 0, 0,
  162, 169, 5, 1, 0, 0, 163, 169, 5, 3, 0, 0, 164, 169, 5, 15, 0, 0, 165, 169,
  5, 17, 0, 0, 166, 169, 5, 19, 0, 0, 167, 169, 5, 28, 0, 0, 168, 162, 1, 0, 0,
  0, 168, 163, 1, 0, 0, 0, 168, 164, 1, 0, 0, 0, 168, 165, 1, 0, 0, 0, 168, 166,
  1, 0, 0, 0, 168, 167, 1, 0, 0, 0, 169, 7, 1, 0, 0, 0, 170, 181, 5, 35, 0, 0,
  171, 181, 5, 20, 0, 0, 172, 177, 3, 54, 27, 0, 173, 174, 5, 45, 0, 0, 174,
  176, 3, 54, 27, 0, 175, 173, 1, 0, 0, 0, 176, 179, 1, 0, 0, 0, 177, 175, 1, 0,
  0, 0, 177, 178, 1, 0, 0, 0, 178, 181, 1, 0, 0, 0, 179, 177, 1, 0, 0, 0, 180,
  170, 1, 0, 0, 0, 180, 171, 1, 0, 0, 0, 180, 172, 1, 0, 0, 0, 181, 9, 1, 0, 0,
  0, 182, 183, 5, 12, 0, 0, 183, 188, 3, 58, 29, 0, 184, 185, 5, 45, 0, 0, 185,
  187, 3, 58, 29, 0, 186, 184, 1, 0, 0, 0, 187, 190, 1, 0, 0, 0, 188, 186, 1, 0,
  0, 0, 188, 189, 1, 0, 0, 0, 189, 192, 1, 0, 0, 0, 190, 188, 1, 0, 0, 0, 191,
  182, 1, 0, 0, 0, 191, 192, 1, 0, 0, 0, 192, 11, 1, 0, 0, 0, 193, 194, 6, 6,
  -1, 0, 194, 195, 5, 47, 0, 0, 195, 196, 3, 12, 6, 0, 196, 197, 5, 48, 0, 0,
  197, 200, 1, 0, 0, 0, 198, 200, 3, 54, 27, 0, 199, 193, 1, 0, 0, 0, 199, 198,
  1, 0, 0, 0, 200, 222, 1, 0, 0, 0, 201, 202, 10, 4, 0, 0, 202, 203, 5, 43, 0,
  0, 203, 221, 3, 12, 6, 5, 204, 205, 10, 3, 0, 0, 205, 206, 5, 44, 0, 0, 206,
  221, 3, 12, 6, 4, 207, 208, 10, 2, 0, 0, 208, 209, 5, 22, 0, 0, 209, 221, 3,
  12, 6, 3, 210, 211, 10, 7, 0, 0, 211, 212, 5, 4, 0, 0, 212, 221, 3, 56, 28, 0,
  213, 214, 10, 6, 0, 0, 214, 221, 5, 33, 0, 0, 215, 216, 10, 5, 0, 0, 216, 221,
  5, 53, 0, 0, 217, 218, 10, 1, 0, 0, 218, 219, 5, 11, 0, 0, 219, 221, 3, 22,
  11, 0, 220, 201, 1, 0, 0, 0, 220, 204, 1, 0, 0, 0, 220, 207, 1, 0, 0, 0, 220,
  210, 1, 0, 0, 0, 220, 213, 1, 0, 0, 0, 220, 215, 1, 0, 0, 0, 220, 217, 1, 0,
  0, 0, 221, 224, 1, 0, 0, 0, 222, 220, 1, 0, 0, 0, 222, 223, 1, 0, 0, 0, 223,
  13, 1, 0, 0, 0, 224, 222, 1, 0, 0, 0, 225, 226, 5, 49, 0, 0, 226, 227, 3, 16,
  8, 0, 227, 233, 5, 50, 0, 0, 228, 229, 5, 45, 0, 0, 229, 230, 5, 49, 0, 0,
  230, 231, 3, 16, 8, 0, 231, 232, 5, 50, 0, 0, 232, 234, 1, 0, 0, 0, 233, 228,
  1, 0, 0, 0, 233, 234, 1, 0, 0, 0, 234, 15, 1, 0, 0, 0, 235, 240, 3, 60, 30, 0,
  236, 237, 5, 45, 0, 0, 237, 239, 3, 60, 30, 0, 238, 236, 1, 0, 0, 0, 239, 242,
  1, 0, 0, 0, 240, 238, 1, 0, 0, 0, 240, 241, 1, 0, 0, 0, 241, 17, 1, 0, 0, 0,
  242, 240, 1, 0, 0, 0, 243, 247, 5, 3, 0, 0, 244, 247, 5, 23, 0, 0, 245, 247,
  5, 20, 0, 0, 246, 243, 1, 0, 0, 0, 246, 244, 1, 0, 0, 0, 246, 245, 1, 0, 0, 0,
  247, 19, 1, 0, 0, 0, 248, 249, 3, 62, 31, 0, 249, 21, 1, 0, 0, 0, 250, 251, 6,
  11, -1, 0, 251, 252, 5, 47, 0, 0, 252, 253, 3, 22, 11, 0, 253, 254, 5, 48, 0,
  0, 254, 261, 1, 0, 0, 0, 255, 256, 3, 54, 27, 0, 256, 257, 5, 49, 0, 0, 257,
  258, 3, 24, 12, 0, 258, 259, 5, 50, 0, 0, 259, 261, 1, 0, 0, 0, 260, 250, 1,
  0, 0, 0, 260, 255, 1, 0, 0, 0, 261, 270, 1, 0, 0, 0, 262, 263, 10, 2, 0, 0,
  263, 264, 5, 2, 0, 0, 264, 269, 3, 22, 11, 3, 265, 266, 10, 1, 0, 0, 266, 267,
  5, 22, 0, 0, 267, 269, 3, 22, 11, 2, 268, 262, 1, 0, 0, 0, 268, 265, 1, 0, 0,
  0, 269, 272, 1, 0, 0, 0, 270, 268, 1, 0, 0, 0, 270, 271, 1, 0, 0, 0, 271, 23,
  1, 0, 0, 0, 272, 270, 1, 0, 0, 0, 273, 274, 6, 12, -1, 0, 274, 275, 5, 47, 0,
  0, 275, 276, 3, 24, 12, 0, 276, 277, 5, 48, 0, 0, 277, 310, 1, 0, 0, 0, 278,
  279, 5, 21, 0, 0, 279, 310, 3, 24, 12, 8, 280, 281, 3, 30, 15, 0, 281, 282, 7,
  0, 0, 0, 282, 283, 3, 30, 15, 0, 283, 310, 1, 0, 0, 0, 284, 285, 3, 26, 13, 0,
  285, 286, 7, 1, 0, 0, 286, 287, 3, 28, 14, 0, 287, 310, 1, 0, 0, 0, 288, 289,
  3, 60, 30, 0, 289, 290, 5, 16, 0, 0, 290, 291, 3, 74, 37, 0, 291, 310, 1, 0,
  0, 0, 292, 296, 3, 60, 30, 0, 293, 297, 5, 14, 0, 0, 294, 295, 5, 21, 0, 0,
  295, 297, 5, 14, 0, 0, 296, 293, 1, 0, 0, 0, 296, 294, 1, 0, 0, 0, 297, 298,
  1, 0, 0, 0, 298, 299, 3, 32, 16, 0, 299, 310, 1, 0, 0, 0, 300, 301, 3, 30, 15,
  0, 301, 302, 5, 14, 0, 0, 302, 303, 5, 24, 0, 0, 303, 304, 5, 47, 0, 0, 304,
  305, 3, 30, 15, 0, 305, 306, 5, 45, 0, 0, 306, 307, 3, 30, 15, 0, 307, 308, 5,
  48, 0, 0, 308, 310, 1, 0, 0, 0, 309, 273, 1, 0, 0, 0, 309, 278, 1, 0, 0, 0,
  309, 280, 1, 0, 0, 0, 309, 284, 1, 0, 0, 0, 309, 288, 1, 0, 0, 0, 309, 292, 1,
  0, 0, 0, 309, 300, 1, 0, 0, 0, 310, 319, 1, 0, 0, 0, 311, 312, 10, 5, 0, 0,
  312, 313, 5, 2, 0, 0, 313, 318, 3, 24, 12, 6, 314, 315, 10, 4, 0, 0, 315, 316,
  5, 22, 0, 0, 316, 318, 3, 24, 12, 5, 317, 311, 1, 0, 0, 0, 317, 314, 1, 0, 0,
  0, 318, 321, 1, 0, 0, 0, 319, 317, 1, 0, 0, 0, 319, 320, 1, 0, 0, 0, 320, 25,
  1, 0, 0, 0, 321, 319, 1, 0, 0, 0, 322, 325, 3, 68, 34, 0, 323, 325, 3, 60, 30,
  0, 324, 322, 1, 0, 0, 0, 324, 323, 1, 0, 0, 0, 325, 27, 1, 0, 0, 0, 326, 330,
  3, 68, 34, 0, 327, 330, 3, 60, 30, 0, 328, 330, 3, 74, 37, 0, 329, 326, 1, 0,
  0, 0, 329, 327, 1, 0, 0, 0, 329, 328, 1, 0, 0, 0, 330, 29, 1, 0, 0, 0, 331,
  332, 6, 15, -1, 0, 332, 333, 5, 47, 0, 0, 333, 334, 3, 30, 15, 0, 334, 335, 5,
  48, 0, 0, 335, 341, 1, 0, 0, 0, 336, 341, 3, 66, 33, 0, 337, 341, 3, 60, 30,
  0, 338, 339, 7, 2, 0, 0, 339, 341, 3, 30, 15, 3, 340, 331, 1, 0, 0, 0, 340,
  336, 1, 0, 0, 0, 340, 337, 1, 0, 0, 0, 340, 338, 1, 0, 0, 0, 341, 350, 1, 0,
  0, 0, 342, 343, 10, 2, 0, 0, 343, 344, 7, 3, 0, 0, 344, 349, 3, 30, 15, 3,
  345, 346, 10, 1, 0, 0, 346, 347, 7, 2, 0, 0, 347, 349, 3, 30, 15, 2, 348, 342,
  1, 0, 0, 0, 348, 345, 1, 0, 0, 0, 349, 352, 1, 0, 0, 0, 350, 348, 1, 0, 0, 0,
  350, 351, 1, 0, 0, 0, 351, 31, 1, 0, 0, 0, 352, 350, 1, 0, 0, 0, 353, 354, 5,
  51, 0, 0, 354, 355, 3, 34, 17, 0, 355, 356, 5, 52, 0, 0, 356, 362, 1, 0, 0, 0,
  357, 358, 5, 51, 0, 0, 358, 359, 3, 36, 18, 0, 359, 360, 5, 52, 0, 0, 360,
  362, 1, 0, 0, 0, 361, 353, 1, 0, 0, 0, 361, 357, 1, 0, 0, 0, 362, 33, 1, 0, 0,
  0, 363, 368, 3, 66, 33, 0, 364, 365, 5, 45, 0, 0, 365, 367, 3, 66, 33, 0, 366,
  364, 1, 0, 0, 0, 367, 370, 1, 0, 0, 0, 368, 366, 1, 0, 0, 0, 368, 369, 1, 0,
  0, 0, 369, 385, 1, 0, 0, 0, 370, 368, 1, 0, 0, 0, 371, 372, 3, 62, 31, 0, 372,
  373, 5, 46, 0, 0, 373, 374, 3, 62, 31, 0, 374, 385, 1, 0, 0, 0, 375, 376, 3,
  64, 32, 0, 376, 377, 5, 46, 0, 0, 377, 378, 3, 64, 32, 0, 378, 385, 1, 0, 0,
  0, 379, 380, 3, 66, 33, 0, 380, 381, 5, 46, 0, 0, 381, 385, 1, 0, 0, 0, 382,
  383, 5, 46, 0, 0, 383, 385, 3, 66, 33, 0, 384, 363, 1, 0, 0, 0, 384, 371, 1,
  0, 0, 0, 384, 375, 1, 0, 0, 0, 384, 379, 1, 0, 0, 0, 384, 382, 1, 0, 0, 0,
  385, 35, 1, 0, 0, 0, 386, 391, 3, 68, 34, 0, 387, 388, 5, 45, 0, 0, 388, 390,
  3, 68, 34, 0, 389, 387, 1, 0, 0, 0, 390, 393, 1, 0, 0, 0, 391, 389, 1, 0, 0,
  0, 391, 392, 1, 0, 0, 0, 392, 37, 1, 0, 0, 0, 393, 391, 1, 0, 0, 0, 394, 398,
  3, 40, 20, 0, 395, 398, 3, 42, 21, 0, 396, 398, 3, 50, 25, 0, 397, 394, 1, 0,
  0, 0, 397, 395, 1, 0, 0, 0, 397, 396, 1, 0, 0, 0, 398, 39, 1, 0, 0, 0, 399,
  400, 3, 62, 31, 0, 400, 401, 5, 10, 0, 0, 401, 41, 1, 0, 0, 0, 402, 404, 3,
  44, 22, 0, 403, 402, 1, 0, 0, 0, 403, 404, 1, 0, 0, 0, 404, 406, 1, 0, 0, 0,
  405, 407, 3, 46, 23, 0, 406, 405, 1, 0, 0, 0, 406, 407, 1, 0, 0, 0, 407, 409,
  1, 0, 0, 0, 408, 410, 3, 48, 24, 0, 409, 408, 1, 0, 0, 0, 409, 410, 1, 0, 0,
  0, 410, 43, 1, 0, 0, 0, 411, 412, 3, 66, 33, 0, 412, 413, 5, 13, 0, 0, 413,
  45, 1, 0, 0, 0, 414, 415, 3, 66, 33, 0, 415, 416, 5, 18, 0, 0, 416, 47, 1, 0,
  0, 0, 417, 418, 3, 66, 33, 0, 418, 419, 5, 25, 0, 0, 419, 49, 1, 0, 0, 0, 420,
  421, 3, 62, 31, 0, 421, 422, 5, 49, 0, 0, 422, 423, 3, 70, 35, 0, 423, 424, 5,
  50, 0, 0, 424, 51, 1, 0, 0, 0, 425, 428, 3, 54, 27, 0, 426, 427, 5, 4, 0, 0,
  427, 429, 3, 56, 28, 0, 428, 426, 1, 0, 0, 0, 428, 429, 1, 0, 0, 0, 429, 53,
  1, 0, 0, 0, 430, 431, 3, 58, 29, 0, 431, 432, 5, 39, 0, 0, 432, 434, 1, 0, 0,
  0, 433, 430, 1, 0, 0, 0, 433, 434, 1, 0, 0, 0, 434, 435, 1, 0, 0, 0, 435, 436,
  3, 56, 28, 0, 436, 55, 1, 0, 0, 0, 437, 438, 3, 70, 35, 0, 438, 57, 1, 0, 0,
  0, 439, 440, 3, 70, 35, 0, 440, 59, 1, 0, 0, 0, 441, 442, 3, 70, 35, 0, 442,
  61, 1, 0, 0, 0, 443, 444, 5, 56, 0, 0, 444, 63, 1, 0, 0, 0, 445, 446, 5, 55,
  0, 0, 446, 65, 1, 0, 0, 0, 447, 450, 3, 62, 31, 0, 448, 450, 3, 64, 32, 0,
  449, 447, 1, 0, 0, 0, 449, 448, 1, 0, 0, 0, 450, 67, 1, 0, 0, 0, 451, 452, 5,
  58, 0, 0, 452, 69, 1, 0, 0, 0, 453, 454, 5, 54, 0, 0, 454, 71, 1, 0, 0, 0,
  455, 456, 7, 4, 0, 0, 456, 73, 1, 0, 0, 0, 457, 458, 5, 63, 0, 0, 458, 459, 3,
  76, 38, 0, 459, 460, 5, 64, 0, 0, 460, 75, 1, 0, 0, 0, 461, 466, 3, 78, 39, 0,
  462, 463, 5, 66, 0, 0, 463, 465, 3, 78, 39, 0, 464, 462, 1, 0, 0, 0, 465, 468,
  1, 0, 0, 0, 466, 464, 1, 0, 0, 0, 466, 467, 1, 0, 0, 0, 467, 77, 1, 0, 0, 0,
  468, 466, 1, 0, 0, 0, 469, 471, 3, 80, 40, 0, 470, 469, 1, 0, 0, 0, 471, 472,
  1, 0, 0, 0, 472, 470, 1, 0, 0, 0, 472, 473, 1, 0, 0, 0, 473, 79, 1, 0, 0, 0,
  474, 476, 3, 82, 41, 0, 475, 477, 3, 86, 43, 0, 476, 475, 1, 0, 0, 0, 476,
  477, 1, 0, 0, 0, 477, 81, 1, 0, 0, 0, 478, 481, 3, 84, 42, 0, 479, 481, 3, 98,
  49, 0, 480, 478, 1, 0, 0, 0, 480, 479, 1, 0, 0, 0, 481, 83, 1, 0, 0, 0, 482,
  483, 5, 70, 0, 0, 483, 484, 3, 76, 38, 0, 484, 485, 5, 71, 0, 0, 485, 85, 1,
  0, 0, 0, 486, 494, 5, 73, 0, 0, 487, 494, 5, 74, 0, 0, 488, 494, 5, 75, 0, 0,
  489, 490, 5, 68, 0, 0, 490, 491, 3, 88, 44, 0, 491, 492, 5, 69, 0, 0, 492,
  494, 1, 0, 0, 0, 493, 486, 1, 0, 0, 0, 493, 487, 1, 0, 0, 0, 493, 488, 1, 0,
  0, 0, 493, 489, 1, 0, 0, 0, 494, 87, 1, 0, 0, 0, 495, 500, 3, 90, 45, 0, 496,
  500, 3, 92, 46, 0, 497, 500, 3, 94, 47, 0, 498, 500, 3, 96, 48, 0, 499, 495,
  1, 0, 0, 0, 499, 496, 1, 0, 0, 0, 499, 497, 1, 0, 0, 0, 499, 498, 1, 0, 0, 0,
  500, 89, 1, 0, 0, 0, 501, 502, 3, 122, 61, 0, 502, 91, 1, 0, 0, 0, 503, 504,
  3, 122, 61, 0, 504, 505, 5, 72, 0, 0, 505, 506, 3, 122, 61, 0, 506, 93, 1, 0,
  0, 0, 507, 508, 3, 122, 61, 0, 508, 509, 5, 72, 0, 0, 509, 95, 1, 0, 0, 0,
  510, 511, 5, 72, 0, 0, 511, 512, 3, 122, 61, 0, 512, 97, 1, 0, 0, 0, 513, 517,
  3, 100, 50, 0, 514, 517, 3, 120, 60, 0, 515, 517, 3, 114, 57, 0, 516, 513, 1,
  0, 0, 0, 516, 514, 1, 0, 0, 0, 516, 515, 1, 0, 0, 0, 517, 99, 1, 0, 0, 0, 518,
  520, 5, 78, 0, 0, 519, 521, 5, 76, 0, 0, 520, 519, 1, 0, 0, 0, 520, 521, 1, 0,
  0, 0, 521, 523, 1, 0, 0, 0, 522, 524, 3, 102, 51, 0, 523, 522, 1, 0, 0, 0,
  524, 525, 1, 0, 0, 0, 525, 523, 1, 0, 0, 0, 525, 526, 1, 0, 0, 0, 526, 527, 1,
  0, 0, 0, 527, 528, 5, 79, 0, 0, 528, 101, 1, 0, 0, 0, 529, 533, 3, 104, 52, 0,
  530, 533, 3, 120, 60, 0, 531, 533, 3, 106, 53, 0, 532, 529, 1, 0, 0, 0, 532,
  530, 1, 0, 0, 0, 532, 531, 1, 0, 0, 0, 533, 103, 1, 0, 0, 0, 534, 535, 3, 108,
  54, 0, 535, 536, 5, 77, 0, 0, 536, 537, 3, 108, 54, 0, 537, 105, 1, 0, 0, 0,
  538, 539, 3, 108, 54, 0, 539, 107, 1, 0, 0, 0, 540, 543, 3, 110, 55, 0, 541,
  543, 3, 112, 56, 0, 542, 540, 1, 0, 0, 0, 542, 541, 1, 0, 0, 0, 543, 109, 1,
  0, 0, 0, 544, 545, 5, 80, 0, 0, 545, 546, 7, 5, 0, 0, 546, 111, 1, 0, 0, 0,
  547, 548, 8, 5, 0, 0, 548, 113, 1, 0, 0, 0, 549, 553, 3, 116, 58, 0, 550, 553,
  5, 82, 0, 0, 551, 553, 3, 118, 59, 0, 552, 549, 1, 0, 0, 0, 552, 550, 1, 0, 0,
  0, 552, 551, 1, 0, 0, 0, 553, 115, 1, 0, 0, 0, 554, 555, 5, 80, 0, 0, 555,
  556, 7, 6, 0, 0, 556, 117, 1, 0, 0, 0, 557, 558, 8, 7, 0, 0, 558, 119, 1, 0,
  0, 0, 559, 560, 7, 8, 0, 0, 560, 121, 1, 0, 0, 0, 561, 563, 5, 91, 0, 0, 562,
  561, 1, 0, 0, 0, 563, 564, 1, 0, 0, 0, 564, 562, 1, 0, 0, 0, 564, 565, 1, 0,
  0, 0, 565, 123, 1, 0, 0, 0, 54, 126, 128, 138, 147, 151, 156, 160, 168, 177,
  180, 188, 191, 199, 220, 222, 233, 240, 246, 260, 268, 270, 296, 309, 317,
  319, 324, 329, 340, 348, 350, 361, 368, 384, 391, 397, 403, 406, 409, 428,
  433, 449, 466, 472, 476, 480, 493, 499, 516, 520, 525, 532, 542, 552, 564,
];

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map(
  (ds, index) => new antlr4.dfa.DFA(ds, index)
);

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CEQLQueryParser extends antlr4.Parser {
  static grammarFileName = 'CEQLQueryParser.g4';
  static literalNames = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'%'",
    null,
    null,
    null,
    "'/'",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    null,
    null,
    "';'",
    "':'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "':+'",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "'<<'",
    "'>>'",
    "'\\>'",
    "'|'",
    "'!'",
    null,
    null,
    null,
    null,
    null,
    "'?'",
    null,
    null,
    "'^'",
    null,
    null,
    null,
    "'\\'",
    null,
    "'.'",
    null,
    null,
    "'\\d'",
    "'\\D'",
    "'\\s'",
    "'\\S'",
    "'\\w'",
    "'\\W'",
  ];
  static symbolicNames = [
    null,
    'K_ALL',
    'K_AND',
    'K_ANY',
    'K_AS',
    'K_BY',
    'K_CONSUME',
    'K_LIMIT',
    'K_DISTINCT',
    'K_EVENT',
    'K_EVENTS',
    'K_FILTER',
    'K_FROM',
    'K_HOURS',
    'K_IN',
    'K_LAST',
    'K_LIKE',
    'K_MAX',
    'K_MINUTES',
    'K_NEXT',
    'K_NONE',
    'K_NOT',
    'K_OR',
    'K_PARTITION',
    'K_RANGE',
    'K_SECONDS',
    'K_SELECT',
    'K_STREAM',
    'K_STRICT',
    'K_UNLESS',
    'K_WHERE',
    'K_WITHIN',
    'PERCENT',
    'PLUS',
    'MINUS',
    'STAR',
    'SLASH',
    'LE',
    'LEQ',
    'GE',
    'GEQ',
    'EQ',
    'NEQ',
    'SEMICOLON',
    'COLON',
    'COMMA',
    'DOUBLE_DOT',
    'LEFT_PARENTHESIS',
    'RIGHT_PARENTHESIS',
    'LEFT_SQUARE_BRACKET',
    'RIGHT_SQUARE_BRACKET',
    'LEFT_CURLY_BRACKET',
    'RIGHT_CURLY_BRACKET',
    'COLON_PLUS',
    'IDENTIFIER',
    'DOUBLE_LITERAL',
    'INTEGER_LITERAL',
    'NUMERICAL_EXPONENT',
    'STRING_LITERAL',
    'SINGLE_LINE_COMMENT',
    'MULTILINE_COMMENT',
    'SPACES',
    'UNEXPECTED_CHAR',
    'REGEX_START',
    'REGEX_END',
    'REGEX_END_ESCAPED',
    'REGEX_PIPE',
    'REGEX_EXCLAMAITON',
    'REGEX_L_CURLY',
    'REGEX_R_CURLY',
    'REGEX_L_PAR',
    'REGEX_R_PAR',
    'REGEX_COMMA',
    'REGEX_QUESTION',
    'REGEX_PLUS',
    'REGEX_STAR',
    'REGEX_HAT',
    'REGEX_HYPHEN',
    'REGEX_L_BRACK',
    'REGEX_R_BRACK',
    'REGEX_BACKSLASH',
    'REGEX_ALPHA',
    'REGEX_DOT',
    'REGEX_DOUBLED_DOT',
    'UNRECOGNIZED',
    'REGEX_DECIMAL_DIGIT',
    'REGEX_NOT_DECIMAL_DIGIT',
    'REGEX_WHITESPACE',
    'REGEX_NOT_WHITESPACE',
    'REGEX_ALPHANUMERIC',
    'REGEX_NOT_ALPHANUMERIC',
    'REGEX_DIGIT',
  ];
  static ruleNames = [
    'parse',
    'error',
    'core_query',
    'selection_strategy',
    'list_of_variables',
    'from_clause',
    'cel_formula',
    'partition_list',
    'attribute_list',
    'consumption_policy',
    'limit',
    'filter',
    'predicate',
    'string_literal',
    'string_literal_or_regexp',
    'math_expr',
    'value_seq',
    'number_seq',
    'string_seq',
    'time_window',
    'event_span',
    'time_span',
    'hour_span',
    'minute_span',
    'second_span',
    'custom_span',
    'named_event',
    's_event_name',
    'event_name',
    'stream_name',
    'attribute_name',
    'integer',
    'double',
    'number',
    'string',
    'any_name',
    'keyword',
    'regexp',
    'regexp_alternation',
    'regexp_exp',
    'regexp_element',
    'regexp_group',
    'parenthesis',
    'quantifier',
    'quantity',
    'quantExact',
    'quantRange',
    'quantMin',
    'quantMax',
    'atom',
    'characterClass',
    'ccAtom',
    'ccRange',
    'ccSingle',
    'ccLiteral',
    'ccEscapes',
    'ccOther',
    'literal',
    'escapes',
    'other',
    'sharedAtom',
    'regexp_number',
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(
      this,
      atn,
      decisionsToDFA,
      sharedContextCache
    );
    this.ruleNames = CEQLQueryParser.ruleNames;
    this.literalNames = CEQLQueryParser.literalNames;
    this.symbolicNames = CEQLQueryParser.symbolicNames;
  }

  sempred(localctx, ruleIndex, predIndex) {
    switch (ruleIndex) {
      case 6:
        return this.cel_formula_sempred(localctx, predIndex);
      case 11:
        return this.filter_sempred(localctx, predIndex);
      case 12:
        return this.predicate_sempred(localctx, predIndex);
      case 15:
        return this.math_expr_sempred(localctx, predIndex);
      default:
        throw 'No predicate with index:' + ruleIndex;
    }
  }

  cel_formula_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 4);
      case 1:
        return this.precpred(this._ctx, 3);
      case 2:
        return this.precpred(this._ctx, 2);
      case 3:
        return this.precpred(this._ctx, 7);
      case 4:
        return this.precpred(this._ctx, 6);
      case 5:
        return this.precpred(this._ctx, 5);
      case 6:
        return this.precpred(this._ctx, 1);
      default:
        throw 'No predicate with index:' + predIndex;
    }
  }

  filter_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 7:
        return this.precpred(this._ctx, 2);
      case 8:
        return this.precpred(this._ctx, 1);
      default:
        throw 'No predicate with index:' + predIndex;
    }
  }

  predicate_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 9:
        return this.precpred(this._ctx, 5);
      case 10:
        return this.precpred(this._ctx, 4);
      default:
        throw 'No predicate with index:' + predIndex;
    }
  }

  math_expr_sempred(localctx, predIndex) {
    switch (predIndex) {
      case 11:
        return this.precpred(this._ctx, 2);
      case 12:
        return this.precpred(this._ctx, 1);
      default:
        throw 'No predicate with index:' + predIndex;
    }
  }

  parse() {
    let localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CEQLQueryParser.RULE_parse);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 128;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 26 || _la === 62) {
        this.state = 126;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case 26:
            this.state = 124;
            this.core_query();
            break;
          case 62:
            this.state = 125;
            this.error();
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
      this.state = 131;
      this.match(CEQLQueryParser.EOF);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  error() {
    let localctx = new ErrorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CEQLQueryParser.RULE_error);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 133;
      localctx._UNEXPECTED_CHAR = this.match(CEQLQueryParser.UNEXPECTED_CHAR);

      throw new Error(
        'UNEXPECTED_CHAR=' +
          (localctx._UNEXPECTED_CHAR == null
            ? null
            : localctx._UNEXPECTED_CHAR.text)
      );
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  core_query() {
    let localctx = new Core_queryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CEQLQueryParser.RULE_core_query);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 136;
      this.match(CEQLQueryParser.K_SELECT);
      this.state = 138;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if ((_la & ~0x1f) === 0 && ((1 << _la) & 269123594) !== 0) {
        this.state = 137;
        this.selection_strategy();
      }

      this.state = 140;
      this.list_of_variables();
      this.state = 141;
      this.from_clause();
      this.state = 142;
      this.match(CEQLQueryParser.K_WHERE);
      this.state = 143;
      this.cel_formula(0);
      this.state = 147;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 23) {
        this.state = 144;
        this.match(CEQLQueryParser.K_PARTITION);
        this.state = 145;
        this.match(CEQLQueryParser.K_BY);
        this.state = 146;
        this.partition_list();
      }

      this.state = 151;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 31) {
        this.state = 149;
        this.match(CEQLQueryParser.K_WITHIN);
        this.state = 150;
        this.time_window();
      }

      this.state = 156;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 6) {
        this.state = 153;
        this.match(CEQLQueryParser.K_CONSUME);
        this.state = 154;
        this.match(CEQLQueryParser.K_BY);
        this.state = 155;
        this.consumption_policy();
      }

      this.state = 160;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 7) {
        this.state = 158;
        this.match(CEQLQueryParser.K_LIMIT);
        this.state = 159;
        this.limit();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  selection_strategy() {
    let localctx = new Selection_strategyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CEQLQueryParser.RULE_selection_strategy);
    try {
      this.state = 168;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 1:
          localctx = new Ss_allContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          this.state = 162;
          this.match(CEQLQueryParser.K_ALL);
          break;
        case 3:
          localctx = new Ss_anyContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          this.state = 163;
          this.match(CEQLQueryParser.K_ANY);
          break;
        case 15:
          localctx = new Ss_lastContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          this.state = 164;
          this.match(CEQLQueryParser.K_LAST);
          break;
        case 17:
          localctx = new Ss_maxContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          this.state = 165;
          this.match(CEQLQueryParser.K_MAX);
          break;
        case 19:
          localctx = new Ss_nextContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          this.state = 166;
          this.match(CEQLQueryParser.K_NEXT);
          break;
        case 28:
          localctx = new Ss_strictContext(this, localctx);
          this.enterOuterAlt(localctx, 6);
          this.state = 167;
          this.match(CEQLQueryParser.K_STRICT);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  list_of_variables() {
    let localctx = new List_of_variablesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CEQLQueryParser.RULE_list_of_variables);
    var _la = 0;
    try {
      this.state = 180;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 35:
          localctx = new S_starContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          this.state = 170;
          this.match(CEQLQueryParser.STAR);
          break;
        case 20:
          localctx = new S_noneContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          this.state = 171;
          this.match(CEQLQueryParser.K_NONE);
          break;
        case 54:
          localctx = new S_list_of_variablesContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          this.state = 172;
          this.s_event_name();
          this.state = 177;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (_la === 45) {
            this.state = 173;
            this.match(CEQLQueryParser.COMMA);
            this.state = 174;
            this.s_event_name();
            this.state = 179;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  from_clause() {
    let localctx = new From_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, CEQLQueryParser.RULE_from_clause);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 191;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 12) {
        this.state = 182;
        this.match(CEQLQueryParser.K_FROM);
        this.state = 183;
        this.stream_name();
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === 45) {
          this.state = 184;
          this.match(CEQLQueryParser.COMMA);
          this.state = 185;
          this.stream_name();
          this.state = 190;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  cel_formula(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new Cel_formulaContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 12;
    this.enterRecursionRule(localctx, 12, CEQLQueryParser.RULE_cel_formula, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 199;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 47:
          localctx = new Par_cel_formulaContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;

          this.state = 194;
          this.match(CEQLQueryParser.LEFT_PARENTHESIS);
          this.state = 195;
          this.cel_formula(0);
          this.state = 196;
          this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
          break;
        case 54:
          localctx = new Event_type_cel_formulaContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 198;
          this.s_event_name();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 222;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 220;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 13, this._ctx);
          switch (la_) {
            case 1:
              localctx = new Non_contiguous_sequencing_cel_formulaContext(
                this,
                new Cel_formulaContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_cel_formula
              );
              this.state = 201;
              if (!this.precpred(this._ctx, 4)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 4)'
                );
              }
              this.state = 202;
              this.match(CEQLQueryParser.SEMICOLON);
              this.state = 203;
              this.cel_formula(5);
              break;

            case 2:
              localctx = new Contiguous_sequencing_cel_formulaContext(
                this,
                new Cel_formulaContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_cel_formula
              );
              this.state = 204;
              if (!this.precpred(this._ctx, 3)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 3)'
                );
              }
              this.state = 205;
              this.match(CEQLQueryParser.COLON);
              this.state = 206;
              this.cel_formula(4);
              break;

            case 3:
              localctx = new Or_cel_formulaContext(
                this,
                new Cel_formulaContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_cel_formula
              );
              this.state = 207;
              if (!this.precpred(this._ctx, 2)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 2)'
                );
              }
              this.state = 208;
              this.match(CEQLQueryParser.K_OR);
              this.state = 209;
              this.cel_formula(3);
              break;

            case 4:
              localctx = new As_cel_formulaContext(
                this,
                new Cel_formulaContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_cel_formula
              );
              this.state = 210;
              if (!this.precpred(this._ctx, 7)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 7)'
                );
              }
              this.state = 211;
              this.match(CEQLQueryParser.K_AS);
              this.state = 212;
              this.event_name();
              break;

            case 5:
              localctx = new Non_contiguous_iteration_cel_formulaContext(
                this,
                new Cel_formulaContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_cel_formula
              );
              this.state = 213;
              if (!this.precpred(this._ctx, 6)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 6)'
                );
              }
              this.state = 214;
              this.match(CEQLQueryParser.PLUS);
              break;

            case 6:
              localctx = new Contiguous_iteration_cel_formulaContext(
                this,
                new Cel_formulaContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_cel_formula
              );
              this.state = 215;
              if (!this.precpred(this._ctx, 5)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 5)'
                );
              }
              this.state = 216;
              this.match(CEQLQueryParser.COLON_PLUS);
              break;

            case 7:
              localctx = new Filter_cel_formulaContext(
                this,
                new Cel_formulaContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_cel_formula
              );
              this.state = 217;
              if (!this.precpred(this._ctx, 1)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 1)'
                );
              }
              this.state = 218;
              this.match(CEQLQueryParser.K_FILTER);
              this.state = 219;
              this.filter(0);
              break;
          }
        }
        this.state = 224;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
      }
    } catch (error) {
      if (error instanceof antlr4.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }

  partition_list() {
    let localctx = new Partition_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CEQLQueryParser.RULE_partition_list);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 225;
      this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
      this.state = 226;
      this.attribute_list();
      this.state = 227;
      this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
      this.state = 233;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 45) {
        this.state = 228;
        this.match(CEQLQueryParser.COMMA);
        this.state = 229;
        this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
        this.state = 230;
        this.attribute_list();
        this.state = 231;
        this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  attribute_list() {
    let localctx = new Attribute_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CEQLQueryParser.RULE_attribute_list);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 235;
      this.attribute_name();
      this.state = 240;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 45) {
        this.state = 236;
        this.match(CEQLQueryParser.COMMA);
        this.state = 237;
        this.attribute_name();
        this.state = 242;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  consumption_policy() {
    let localctx = new Consumption_policyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CEQLQueryParser.RULE_consumption_policy);
    try {
      this.state = 246;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 3:
          localctx = new Cp_anyContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          this.state = 243;
          this.match(CEQLQueryParser.K_ANY);
          break;
        case 23:
          localctx = new Cp_partitionContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          this.state = 244;
          this.match(CEQLQueryParser.K_PARTITION);
          break;
        case 20:
          localctx = new Cp_noneContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          this.state = 245;
          this.match(CEQLQueryParser.K_NONE);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  limit() {
    let localctx = new LimitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CEQLQueryParser.RULE_limit);
    try {
      localctx = new L_integerContext(this, localctx);
      this.enterOuterAlt(localctx, 1);
      this.state = 248;
      this.integer();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  filter(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new FilterContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 22;
    this.enterRecursionRule(localctx, 22, CEQLQueryParser.RULE_filter, _p);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 260;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 47:
          localctx = new Par_filterContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;

          this.state = 251;
          this.match(CEQLQueryParser.LEFT_PARENTHESIS);
          this.state = 252;
          this.filter(0);
          this.state = 253;
          this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
          break;
        case 54:
          localctx = new Atomic_filterContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 255;
          this.s_event_name();
          this.state = 256;
          this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
          this.state = 257;
          this.predicate(0);
          this.state = 258;
          this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 270;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 268;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
          switch (la_) {
            case 1:
              localctx = new And_filterContext(
                this,
                new FilterContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_filter
              );
              this.state = 262;
              if (!this.precpred(this._ctx, 2)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 2)'
                );
              }
              this.state = 263;
              this.match(CEQLQueryParser.K_AND);
              this.state = 264;
              this.filter(3);
              break;

            case 2:
              localctx = new Or_filterContext(
                this,
                new FilterContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_filter
              );
              this.state = 265;
              if (!this.precpred(this._ctx, 1)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 1)'
                );
              }
              this.state = 266;
              this.match(CEQLQueryParser.K_OR);
              this.state = 267;
              this.filter(2);
              break;
          }
        }
        this.state = 272;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
      }
    } catch (error) {
      if (error instanceof antlr4.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }

  predicate(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new PredicateContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 24;
    this.enterRecursionRule(localctx, 24, CEQLQueryParser.RULE_predicate, _p);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 309;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 22, this._ctx);
      switch (la_) {
        case 1:
          localctx = new Par_predicateContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;

          this.state = 274;
          this.match(CEQLQueryParser.LEFT_PARENTHESIS);
          this.state = 275;
          this.predicate(0);
          this.state = 276;
          this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
          break;

        case 2:
          localctx = new Not_predicateContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 278;
          this.match(CEQLQueryParser.K_NOT);
          this.state = 279;
          this.predicate(8);
          break;

        case 3:
          localctx = new Inequality_predicateContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 280;
          this.math_expr(0);
          this.state = 281;
          _la = this._input.LA(1);
          if (!(((_la - 37) & ~0x1f) === 0 && ((1 << (_la - 37)) & 63) !== 0)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 282;
          this.math_expr(0);
          break;

        case 4:
          localctx = new Equality_string_predicateContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 284;
          this.string_literal();
          this.state = 285;
          _la = this._input.LA(1);
          if (!(_la === 41 || _la === 42)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 286;
          this.string_literal_or_regexp();
          break;

        case 5:
          localctx = new Regex_predicateContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 288;
          this.attribute_name();
          this.state = 289;
          this.match(CEQLQueryParser.K_LIKE);
          this.state = 290;
          this.regexp();
          break;

        case 6:
          localctx = new In_predicateContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 292;
          this.attribute_name();
          this.state = 296;
          this._errHandler.sync(this);
          switch (this._input.LA(1)) {
            case 14:
              this.state = 293;
              this.match(CEQLQueryParser.K_IN);
              break;
            case 21:
              this.state = 294;
              this.match(CEQLQueryParser.K_NOT);
              this.state = 295;
              this.match(CEQLQueryParser.K_IN);
              break;
            default:
              throw new antlr4.error.NoViableAltException(this);
          }
          this.state = 298;
          this.value_seq();
          break;

        case 7:
          localctx = new In_range_predicateContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 300;
          this.math_expr(0);
          this.state = 301;
          this.match(CEQLQueryParser.K_IN);
          this.state = 302;
          this.match(CEQLQueryParser.K_RANGE);
          this.state = 303;
          this.match(CEQLQueryParser.LEFT_PARENTHESIS);
          this.state = 304;
          this.math_expr(0);
          this.state = 305;
          this.match(CEQLQueryParser.COMMA);
          this.state = 306;
          this.math_expr(0);
          this.state = 307;
          this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
          break;
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 319;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 317;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 23, this._ctx);
          switch (la_) {
            case 1:
              localctx = new And_predicateContext(
                this,
                new PredicateContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_predicate
              );
              this.state = 311;
              if (!this.precpred(this._ctx, 5)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 5)'
                );
              }
              this.state = 312;
              this.match(CEQLQueryParser.K_AND);
              this.state = 313;
              this.predicate(6);
              break;

            case 2:
              localctx = new Or_predicateContext(
                this,
                new PredicateContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_predicate
              );
              this.state = 314;
              if (!this.precpred(this._ctx, 4)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 4)'
                );
              }
              this.state = 315;
              this.match(CEQLQueryParser.K_OR);
              this.state = 316;
              this.predicate(5);
              break;
          }
        }
        this.state = 321;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
      }
    } catch (error) {
      if (error instanceof antlr4.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }

  string_literal() {
    let localctx = new String_literalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, CEQLQueryParser.RULE_string_literal);
    try {
      this.state = 324;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 58:
          this.enterOuterAlt(localctx, 1);
          this.state = 322;
          this.string();
          break;
        case 54:
          this.enterOuterAlt(localctx, 2);
          this.state = 323;
          this.attribute_name();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  string_literal_or_regexp() {
    let localctx = new String_literal_or_regexpContext(
      this,
      this._ctx,
      this.state
    );
    this.enterRule(localctx, 28, CEQLQueryParser.RULE_string_literal_or_regexp);
    try {
      this.state = 329;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 58:
          this.enterOuterAlt(localctx, 1);
          this.state = 326;
          this.string();
          break;
        case 54:
          this.enterOuterAlt(localctx, 2);
          this.state = 327;
          this.attribute_name();
          break;
        case 63:
          this.enterOuterAlt(localctx, 3);
          this.state = 328;
          this.regexp();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  math_expr(_p) {
    if (_p === undefined) {
      _p = 0;
    }
    const _parentctx = this._ctx;
    const _parentState = this.state;
    let localctx = new Math_exprContext(this, this._ctx, _parentState);
    let _prevctx = localctx;
    const _startState = 30;
    this.enterRecursionRule(localctx, 30, CEQLQueryParser.RULE_math_expr, _p);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 340;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 47:
          localctx = new Par_math_exprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;

          this.state = 332;
          this.match(CEQLQueryParser.LEFT_PARENTHESIS);
          this.state = 333;
          this.math_expr(0);
          this.state = 334;
          this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
          break;
        case 55:
        case 56:
          localctx = new Number_math_exprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 336;
          this.number();
          break;
        case 54:
          localctx = new Attribute_math_exprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 337;
          this.attribute_name();
          break;
        case 33:
        case 34:
          localctx = new Unary_math_exprContext(this, localctx);
          this._ctx = localctx;
          _prevctx = localctx;
          this.state = 338;
          _la = this._input.LA(1);
          if (!(_la === 33 || _la === 34)) {
            this._errHandler.recoverInline(this);
          } else {
            this._errHandler.reportMatch(this);
            this.consume();
          }
          this.state = 339;
          this.math_expr(3);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
      this._ctx.stop = this._input.LT(-1);
      this.state = 350;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          if (this._parseListeners !== null) {
            this.triggerExitRuleEvent();
          }
          _prevctx = localctx;
          this.state = 348;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 28, this._ctx);
          switch (la_) {
            case 1:
              localctx = new Mul_math_exprContext(
                this,
                new Math_exprContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_math_expr
              );
              this.state = 342;
              if (!this.precpred(this._ctx, 2)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 2)'
                );
              }
              this.state = 343;
              _la = this._input.LA(1);
              if (
                !(((_la - 32) & ~0x1f) === 0 && ((1 << (_la - 32)) & 25) !== 0)
              ) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 344;
              this.math_expr(3);
              break;

            case 2:
              localctx = new Sum_math_exprContext(
                this,
                new Math_exprContext(this, _parentctx, _parentState)
              );
              this.pushNewRecursionContext(
                localctx,
                _startState,
                CEQLQueryParser.RULE_math_expr
              );
              this.state = 345;
              if (!this.precpred(this._ctx, 1)) {
                throw new antlr4.error.FailedPredicateException(
                  this,
                  'this.precpred(this._ctx, 1)'
                );
              }
              this.state = 346;
              _la = this._input.LA(1);
              if (!(_la === 33 || _la === 34)) {
                this._errHandler.recoverInline(this);
              } else {
                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 347;
              this.math_expr(2);
              break;
          }
        }
        this.state = 352;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
      }
    } catch (error) {
      if (error instanceof antlr4.error.RecognitionException) {
        localctx.exception = error;
        this._errHandler.reportError(this, error);
        this._errHandler.recover(this, error);
      } else {
        throw error;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return localctx;
  }

  value_seq() {
    let localctx = new Value_seqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, CEQLQueryParser.RULE_value_seq);
    try {
      this.state = 361;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 30, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 353;
          this.match(CEQLQueryParser.LEFT_CURLY_BRACKET);
          this.state = 354;
          this.number_seq();
          this.state = 355;
          this.match(CEQLQueryParser.RIGHT_CURLY_BRACKET);
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 357;
          this.match(CEQLQueryParser.LEFT_CURLY_BRACKET);
          this.state = 358;
          this.string_seq();
          this.state = 359;
          this.match(CEQLQueryParser.RIGHT_CURLY_BRACKET);
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  number_seq() {
    let localctx = new Number_seqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, CEQLQueryParser.RULE_number_seq);
    var _la = 0;
    try {
      this.state = 384;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 32, this._ctx);
      switch (la_) {
        case 1:
          localctx = new Number_listContext(this, localctx);
          this.enterOuterAlt(localctx, 1);
          this.state = 363;
          this.number();
          this.state = 368;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          while (_la === 45) {
            this.state = 364;
            this.match(CEQLQueryParser.COMMA);
            this.state = 365;
            this.number();
            this.state = 370;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
          }
          break;

        case 2:
          localctx = new Integer_rangeContext(this, localctx);
          this.enterOuterAlt(localctx, 2);
          this.state = 371;
          this.integer();
          this.state = 372;
          this.match(CEQLQueryParser.DOUBLE_DOT);
          this.state = 373;
          this.integer();
          break;

        case 3:
          localctx = new Double_rangeContext(this, localctx);
          this.enterOuterAlt(localctx, 3);
          this.state = 375;
          this.double_();
          this.state = 376;
          this.match(CEQLQueryParser.DOUBLE_DOT);
          this.state = 377;
          this.double_();
          break;

        case 4:
          localctx = new Number_range_lowerContext(this, localctx);
          this.enterOuterAlt(localctx, 4);
          this.state = 379;
          this.number();
          this.state = 380;
          this.match(CEQLQueryParser.DOUBLE_DOT);
          break;

        case 5:
          localctx = new Number_range_upperContext(this, localctx);
          this.enterOuterAlt(localctx, 5);
          this.state = 382;
          this.match(CEQLQueryParser.DOUBLE_DOT);
          this.state = 383;
          this.number();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  string_seq() {
    let localctx = new String_seqContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, CEQLQueryParser.RULE_string_seq);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 386;
      this.string();
      this.state = 391;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 45) {
        this.state = 387;
        this.match(CEQLQueryParser.COMMA);
        this.state = 388;
        this.string();
        this.state = 393;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  time_window() {
    let localctx = new Time_windowContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, CEQLQueryParser.RULE_time_window);
    try {
      this.state = 397;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 34, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 394;
          this.event_span();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 395;
          this.time_span();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 396;
          this.custom_span();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  event_span() {
    let localctx = new Event_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, CEQLQueryParser.RULE_event_span);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 399;
      this.integer();
      this.state = 400;
      this.match(CEQLQueryParser.K_EVENTS);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  time_span() {
    let localctx = new Time_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, CEQLQueryParser.RULE_time_span);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 403;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 35, this._ctx);
      if (la_ === 1) {
        this.state = 402;
        this.hour_span();
      }
      this.state = 406;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 36, this._ctx);
      if (la_ === 1) {
        this.state = 405;
        this.minute_span();
      }
      this.state = 409;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 55 || _la === 56) {
        this.state = 408;
        this.second_span();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  hour_span() {
    let localctx = new Hour_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, CEQLQueryParser.RULE_hour_span);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 411;
      this.number();
      this.state = 412;
      this.match(CEQLQueryParser.K_HOURS);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  minute_span() {
    let localctx = new Minute_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, CEQLQueryParser.RULE_minute_span);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 414;
      this.number();
      this.state = 415;
      this.match(CEQLQueryParser.K_MINUTES);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  second_span() {
    let localctx = new Second_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, CEQLQueryParser.RULE_second_span);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 417;
      this.number();
      this.state = 418;
      this.match(CEQLQueryParser.K_SECONDS);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  custom_span() {
    let localctx = new Custom_spanContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, CEQLQueryParser.RULE_custom_span);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 420;
      this.integer();
      this.state = 421;
      this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
      this.state = 422;
      this.any_name();
      this.state = 423;
      this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  named_event() {
    let localctx = new Named_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, CEQLQueryParser.RULE_named_event);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 425;
      this.s_event_name();
      this.state = 428;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 4) {
        this.state = 426;
        this.match(CEQLQueryParser.K_AS);
        this.state = 427;
        this.event_name();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  s_event_name() {
    let localctx = new S_event_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, CEQLQueryParser.RULE_s_event_name);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 433;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 39, this._ctx);
      if (la_ === 1) {
        this.state = 430;
        this.stream_name();
        this.state = 431;
        this.match(CEQLQueryParser.GE);
      }
      this.state = 435;
      this.event_name();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  event_name() {
    let localctx = new Event_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, CEQLQueryParser.RULE_event_name);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 437;
      this.any_name();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  stream_name() {
    let localctx = new Stream_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, CEQLQueryParser.RULE_stream_name);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 439;
      this.any_name();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  attribute_name() {
    let localctx = new Attribute_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, CEQLQueryParser.RULE_attribute_name);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 441;
      this.any_name();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  integer() {
    let localctx = new IntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, CEQLQueryParser.RULE_integer);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 443;
      this.match(CEQLQueryParser.INTEGER_LITERAL);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  double_() {
    let localctx = new DoubleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, CEQLQueryParser.RULE_double);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 445;
      this.match(CEQLQueryParser.DOUBLE_LITERAL);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  number() {
    let localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, CEQLQueryParser.RULE_number);
    try {
      this.state = 449;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 56:
          this.enterOuterAlt(localctx, 1);
          this.state = 447;
          this.integer();
          break;
        case 55:
          this.enterOuterAlt(localctx, 2);
          this.state = 448;
          this.double_();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  string() {
    let localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, CEQLQueryParser.RULE_string);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 451;
      this.match(CEQLQueryParser.STRING_LITERAL);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  any_name() {
    let localctx = new Any_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, CEQLQueryParser.RULE_any_name);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 453;
      this.match(CEQLQueryParser.IDENTIFIER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  keyword() {
    let localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, CEQLQueryParser.RULE_keyword);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 455;
      _la = this._input.LA(1);
      if (!((_la & ~0x1f) === 0 && ((1 << _la) & 4294967166) !== 0)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  regexp() {
    let localctx = new RegexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, CEQLQueryParser.RULE_regexp);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 457;
      this.match(CEQLQueryParser.REGEX_START);
      this.state = 458;
      this.regexp_alternation();
      this.state = 459;
      this.match(CEQLQueryParser.REGEX_END);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  regexp_alternation() {
    let localctx = new Regexp_alternationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, CEQLQueryParser.RULE_regexp_alternation);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 461;
      this.regexp_exp();
      this.state = 466;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      while (_la === 66) {
        this.state = 462;
        this.match(CEQLQueryParser.REGEX_PIPE);
        this.state = 463;
        this.regexp_exp();
        this.state = 468;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  regexp_exp() {
    let localctx = new Regexp_expContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, CEQLQueryParser.RULE_regexp_exp);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 470;
      this._errHandler.sync(this);
      var _alt = 1;
      do {
        switch (_alt) {
          case 1:
            this.state = 469;
            this.regexp_element();
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 472;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
      } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  regexp_element() {
    let localctx = new Regexp_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, CEQLQueryParser.RULE_regexp_element);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 474;
      this.regexp_group();
      this.state = 476;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (((_la - 68) & ~0x1f) === 0 && ((1 << (_la - 68)) & 225) !== 0) {
        this.state = 475;
        this.quantifier();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  regexp_group() {
    let localctx = new Regexp_groupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, CEQLQueryParser.RULE_regexp_group);
    try {
      this.state = 480;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 70:
          this.enterOuterAlt(localctx, 1);
          this.state = 478;
          this.parenthesis();
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 67:
        case 72:
        case 76:
        case 77:
        case 78:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 91:
          this.enterOuterAlt(localctx, 2);
          this.state = 479;
          this.atom();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  parenthesis() {
    let localctx = new ParenthesisContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, CEQLQueryParser.RULE_parenthesis);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 482;
      this.match(CEQLQueryParser.REGEX_L_PAR);
      this.state = 483;
      this.regexp_alternation();
      this.state = 484;
      this.match(CEQLQueryParser.REGEX_R_PAR);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  quantifier() {
    let localctx = new QuantifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, CEQLQueryParser.RULE_quantifier);
    try {
      this.state = 493;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 73:
          this.enterOuterAlt(localctx, 1);
          this.state = 486;
          this.match(CEQLQueryParser.REGEX_QUESTION);
          break;
        case 74:
          this.enterOuterAlt(localctx, 2);
          this.state = 487;
          this.match(CEQLQueryParser.REGEX_PLUS);
          break;
        case 75:
          this.enterOuterAlt(localctx, 3);
          this.state = 488;
          this.match(CEQLQueryParser.REGEX_STAR);
          break;
        case 68:
          this.enterOuterAlt(localctx, 4);
          this.state = 489;
          this.match(CEQLQueryParser.REGEX_L_CURLY);
          this.state = 490;
          this.quantity();
          this.state = 491;
          this.match(CEQLQueryParser.REGEX_R_CURLY);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  quantity() {
    let localctx = new QuantityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, CEQLQueryParser.RULE_quantity);
    try {
      this.state = 499;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 46, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 495;
          this.quantExact();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 496;
          this.quantRange();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 497;
          this.quantMin();
          break;

        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 498;
          this.quantMax();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  quantExact() {
    let localctx = new QuantExactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, CEQLQueryParser.RULE_quantExact);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 501;
      this.regexp_number();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  quantRange() {
    let localctx = new QuantRangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, CEQLQueryParser.RULE_quantRange);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 503;
      this.regexp_number();
      this.state = 504;
      this.match(CEQLQueryParser.REGEX_COMMA);
      this.state = 505;
      this.regexp_number();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  quantMin() {
    let localctx = new QuantMinContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, CEQLQueryParser.RULE_quantMin);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 507;
      this.regexp_number();
      this.state = 508;
      this.match(CEQLQueryParser.REGEX_COMMA);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  quantMax() {
    let localctx = new QuantMaxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, CEQLQueryParser.RULE_quantMax);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 510;
      this.match(CEQLQueryParser.REGEX_COMMA);
      this.state = 511;
      this.regexp_number();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  atom() {
    let localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, CEQLQueryParser.RULE_atom);
    try {
      this.state = 516;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 47, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 513;
          this.characterClass();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 514;
          this.sharedAtom();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 515;
          this.literal();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  characterClass() {
    let localctx = new CharacterClassContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, CEQLQueryParser.RULE_characterClass);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 518;
      this.match(CEQLQueryParser.REGEX_L_BRACK);
      this.state = 520;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === 76) {
        this.state = 519;
        this.match(CEQLQueryParser.REGEX_HAT);
      }

      this.state = 523;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 522;
        this.ccAtom();
        this.state = 525;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (
        ((_la & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) ||
        (((_la - 32) & ~0x1f) === 0 &&
          ((1 << (_la - 32)) & 4294967295) !== 0) ||
        (((_la - 64) & ~0x1f) === 0 && ((1 << (_la - 64)) & 268390399) !== 0)
      );
      this.state = 527;
      this.match(CEQLQueryParser.REGEX_R_BRACK);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  ccAtom() {
    let localctx = new CcAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, CEQLQueryParser.RULE_ccAtom);
    try {
      this.state = 532;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 50, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 529;
          this.ccRange();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 530;
          this.sharedAtom();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 531;
          this.ccSingle();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  ccRange() {
    let localctx = new CcRangeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, CEQLQueryParser.RULE_ccRange);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 534;
      this.ccLiteral();
      this.state = 535;
      this.match(CEQLQueryParser.REGEX_HYPHEN);
      this.state = 536;
      this.ccLiteral();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  ccSingle() {
    let localctx = new CcSingleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, CEQLQueryParser.RULE_ccSingle);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 538;
      this.ccLiteral();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  ccLiteral() {
    let localctx = new CcLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, CEQLQueryParser.RULE_ccLiteral);
    try {
      this.state = 542;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case 80:
          this.enterOuterAlt(localctx, 1);
          this.state = 540;
          this.ccEscapes();
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 78:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 91:
          this.enterOuterAlt(localctx, 2);
          this.state = 541;
          this.ccOther();
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  ccEscapes() {
    let localctx = new CcEscapesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, CEQLQueryParser.RULE_ccEscapes);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 544;
      this.match(CEQLQueryParser.REGEX_BACKSLASH);
      this.state = 545;
      _la = this._input.LA(1);
      if (!(((_la - 76) & ~0x1f) === 0 && ((1 << (_la - 76)) & 27) !== 0)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  ccOther() {
    let localctx = new CcOtherContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, CEQLQueryParser.RULE_ccOther);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 547;
      _la = this._input.LA(1);
      if (
        _la <= 0 ||
        (((_la - 76) & ~0x1f) === 0 && ((1 << (_la - 76)) & 27) !== 0)
      ) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  literal() {
    let localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, CEQLQueryParser.RULE_literal);
    try {
      this.state = 552;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 52, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 549;
          this.escapes();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 550;
          this.match(CEQLQueryParser.REGEX_DOT);
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 551;
          this.other();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  escapes() {
    let localctx = new EscapesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, CEQLQueryParser.RULE_escapes);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 554;
      this.match(CEQLQueryParser.REGEX_BACKSLASH);
      this.state = 555;
      _la = this._input.LA(1);
      if (!(((_la - 66) & ~0x1f) === 0 && ((1 << (_la - 66)) & 95165) !== 0)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  other() {
    let localctx = new OtherContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, CEQLQueryParser.RULE_other);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 557;
      _la = this._input.LA(1);
      if (
        _la <= 0 ||
        (((_la - 66) & ~0x1f) === 0 && ((1 << (_la - 66)) & 29629) !== 0)
      ) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  sharedAtom() {
    let localctx = new SharedAtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, CEQLQueryParser.RULE_sharedAtom);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 559;
      _la = this._input.LA(1);
      if (!(((_la - 85) & ~0x1f) === 0 && ((1 << (_la - 85)) & 63) !== 0)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  regexp_number() {
    let localctx = new Regexp_numberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, CEQLQueryParser.RULE_regexp_number);
    var _la = 0;
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 562;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      do {
        this.state = 561;
        this.match(CEQLQueryParser.REGEX_DIGIT);
        this.state = 564;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
      } while (_la === 91);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
}

CEQLQueryParser.EOF = antlr4.Token.EOF;
CEQLQueryParser.K_ALL = 1;
CEQLQueryParser.K_AND = 2;
CEQLQueryParser.K_ANY = 3;
CEQLQueryParser.K_AS = 4;
CEQLQueryParser.K_BY = 5;
CEQLQueryParser.K_CONSUME = 6;
CEQLQueryParser.K_LIMIT = 7;
CEQLQueryParser.K_DISTINCT = 8;
CEQLQueryParser.K_EVENT = 9;
CEQLQueryParser.K_EVENTS = 10;
CEQLQueryParser.K_FILTER = 11;
CEQLQueryParser.K_FROM = 12;
CEQLQueryParser.K_HOURS = 13;
CEQLQueryParser.K_IN = 14;
CEQLQueryParser.K_LAST = 15;
CEQLQueryParser.K_LIKE = 16;
CEQLQueryParser.K_MAX = 17;
CEQLQueryParser.K_MINUTES = 18;
CEQLQueryParser.K_NEXT = 19;
CEQLQueryParser.K_NONE = 20;
CEQLQueryParser.K_NOT = 21;
CEQLQueryParser.K_OR = 22;
CEQLQueryParser.K_PARTITION = 23;
CEQLQueryParser.K_RANGE = 24;
CEQLQueryParser.K_SECONDS = 25;
CEQLQueryParser.K_SELECT = 26;
CEQLQueryParser.K_STREAM = 27;
CEQLQueryParser.K_STRICT = 28;
CEQLQueryParser.K_UNLESS = 29;
CEQLQueryParser.K_WHERE = 30;
CEQLQueryParser.K_WITHIN = 31;
CEQLQueryParser.PERCENT = 32;
CEQLQueryParser.PLUS = 33;
CEQLQueryParser.MINUS = 34;
CEQLQueryParser.STAR = 35;
CEQLQueryParser.SLASH = 36;
CEQLQueryParser.LE = 37;
CEQLQueryParser.LEQ = 38;
CEQLQueryParser.GE = 39;
CEQLQueryParser.GEQ = 40;
CEQLQueryParser.EQ = 41;
CEQLQueryParser.NEQ = 42;
CEQLQueryParser.SEMICOLON = 43;
CEQLQueryParser.COLON = 44;
CEQLQueryParser.COMMA = 45;
CEQLQueryParser.DOUBLE_DOT = 46;
CEQLQueryParser.LEFT_PARENTHESIS = 47;
CEQLQueryParser.RIGHT_PARENTHESIS = 48;
CEQLQueryParser.LEFT_SQUARE_BRACKET = 49;
CEQLQueryParser.RIGHT_SQUARE_BRACKET = 50;
CEQLQueryParser.LEFT_CURLY_BRACKET = 51;
CEQLQueryParser.RIGHT_CURLY_BRACKET = 52;
CEQLQueryParser.COLON_PLUS = 53;
CEQLQueryParser.IDENTIFIER = 54;
CEQLQueryParser.DOUBLE_LITERAL = 55;
CEQLQueryParser.INTEGER_LITERAL = 56;
CEQLQueryParser.NUMERICAL_EXPONENT = 57;
CEQLQueryParser.STRING_LITERAL = 58;
CEQLQueryParser.SINGLE_LINE_COMMENT = 59;
CEQLQueryParser.MULTILINE_COMMENT = 60;
CEQLQueryParser.SPACES = 61;
CEQLQueryParser.UNEXPECTED_CHAR = 62;
CEQLQueryParser.REGEX_START = 63;
CEQLQueryParser.REGEX_END = 64;
CEQLQueryParser.REGEX_END_ESCAPED = 65;
CEQLQueryParser.REGEX_PIPE = 66;
CEQLQueryParser.REGEX_EXCLAMAITON = 67;
CEQLQueryParser.REGEX_L_CURLY = 68;
CEQLQueryParser.REGEX_R_CURLY = 69;
CEQLQueryParser.REGEX_L_PAR = 70;
CEQLQueryParser.REGEX_R_PAR = 71;
CEQLQueryParser.REGEX_COMMA = 72;
CEQLQueryParser.REGEX_QUESTION = 73;
CEQLQueryParser.REGEX_PLUS = 74;
CEQLQueryParser.REGEX_STAR = 75;
CEQLQueryParser.REGEX_HAT = 76;
CEQLQueryParser.REGEX_HYPHEN = 77;
CEQLQueryParser.REGEX_L_BRACK = 78;
CEQLQueryParser.REGEX_R_BRACK = 79;
CEQLQueryParser.REGEX_BACKSLASH = 80;
CEQLQueryParser.REGEX_ALPHA = 81;
CEQLQueryParser.REGEX_DOT = 82;
CEQLQueryParser.REGEX_DOUBLED_DOT = 83;
CEQLQueryParser.UNRECOGNIZED = 84;
CEQLQueryParser.REGEX_DECIMAL_DIGIT = 85;
CEQLQueryParser.REGEX_NOT_DECIMAL_DIGIT = 86;
CEQLQueryParser.REGEX_WHITESPACE = 87;
CEQLQueryParser.REGEX_NOT_WHITESPACE = 88;
CEQLQueryParser.REGEX_ALPHANUMERIC = 89;
CEQLQueryParser.REGEX_NOT_ALPHANUMERIC = 90;
CEQLQueryParser.REGEX_DIGIT = 91;

CEQLQueryParser.RULE_parse = 0;
CEQLQueryParser.RULE_error = 1;
CEQLQueryParser.RULE_core_query = 2;
CEQLQueryParser.RULE_selection_strategy = 3;
CEQLQueryParser.RULE_list_of_variables = 4;
CEQLQueryParser.RULE_from_clause = 5;
CEQLQueryParser.RULE_cel_formula = 6;
CEQLQueryParser.RULE_partition_list = 7;
CEQLQueryParser.RULE_attribute_list = 8;
CEQLQueryParser.RULE_consumption_policy = 9;
CEQLQueryParser.RULE_limit = 10;
CEQLQueryParser.RULE_filter = 11;
CEQLQueryParser.RULE_predicate = 12;
CEQLQueryParser.RULE_string_literal = 13;
CEQLQueryParser.RULE_string_literal_or_regexp = 14;
CEQLQueryParser.RULE_math_expr = 15;
CEQLQueryParser.RULE_value_seq = 16;
CEQLQueryParser.RULE_number_seq = 17;
CEQLQueryParser.RULE_string_seq = 18;
CEQLQueryParser.RULE_time_window = 19;
CEQLQueryParser.RULE_event_span = 20;
CEQLQueryParser.RULE_time_span = 21;
CEQLQueryParser.RULE_hour_span = 22;
CEQLQueryParser.RULE_minute_span = 23;
CEQLQueryParser.RULE_second_span = 24;
CEQLQueryParser.RULE_custom_span = 25;
CEQLQueryParser.RULE_named_event = 26;
CEQLQueryParser.RULE_s_event_name = 27;
CEQLQueryParser.RULE_event_name = 28;
CEQLQueryParser.RULE_stream_name = 29;
CEQLQueryParser.RULE_attribute_name = 30;
CEQLQueryParser.RULE_integer = 31;
CEQLQueryParser.RULE_double = 32;
CEQLQueryParser.RULE_number = 33;
CEQLQueryParser.RULE_string = 34;
CEQLQueryParser.RULE_any_name = 35;
CEQLQueryParser.RULE_keyword = 36;
CEQLQueryParser.RULE_regexp = 37;
CEQLQueryParser.RULE_regexp_alternation = 38;
CEQLQueryParser.RULE_regexp_exp = 39;
CEQLQueryParser.RULE_regexp_element = 40;
CEQLQueryParser.RULE_regexp_group = 41;
CEQLQueryParser.RULE_parenthesis = 42;
CEQLQueryParser.RULE_quantifier = 43;
CEQLQueryParser.RULE_quantity = 44;
CEQLQueryParser.RULE_quantExact = 45;
CEQLQueryParser.RULE_quantRange = 46;
CEQLQueryParser.RULE_quantMin = 47;
CEQLQueryParser.RULE_quantMax = 48;
CEQLQueryParser.RULE_atom = 49;
CEQLQueryParser.RULE_characterClass = 50;
CEQLQueryParser.RULE_ccAtom = 51;
CEQLQueryParser.RULE_ccRange = 52;
CEQLQueryParser.RULE_ccSingle = 53;
CEQLQueryParser.RULE_ccLiteral = 54;
CEQLQueryParser.RULE_ccEscapes = 55;
CEQLQueryParser.RULE_ccOther = 56;
CEQLQueryParser.RULE_literal = 57;
CEQLQueryParser.RULE_escapes = 58;
CEQLQueryParser.RULE_other = 59;
CEQLQueryParser.RULE_sharedAtom = 60;
CEQLQueryParser.RULE_regexp_number = 61;

class ParseContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_parse;
  }

  EOF() {
    return this.getToken(CEQLQueryParser.EOF, 0);
  }

  core_query = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Core_queryContext);
    } else {
      return this.getTypedRuleContext(Core_queryContext, i);
    }
  };

  error = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ErrorContext);
    } else {
      return this.getTypedRuleContext(ErrorContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterParse(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitParse(this);
    }
  }
}

class ErrorContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_error;
    this._UNEXPECTED_CHAR = null;
  }

  UNEXPECTED_CHAR() {
    return this.getToken(CEQLQueryParser.UNEXPECTED_CHAR, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterError(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitError(this);
    }
  }
}

class Core_queryContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_core_query;
  }

  K_SELECT() {
    return this.getToken(CEQLQueryParser.K_SELECT, 0);
  }

  list_of_variables() {
    return this.getTypedRuleContext(List_of_variablesContext, 0);
  }

  from_clause() {
    return this.getTypedRuleContext(From_clauseContext, 0);
  }

  K_WHERE() {
    return this.getToken(CEQLQueryParser.K_WHERE, 0);
  }

  cel_formula() {
    return this.getTypedRuleContext(Cel_formulaContext, 0);
  }

  selection_strategy() {
    return this.getTypedRuleContext(Selection_strategyContext, 0);
  }

  K_PARTITION() {
    return this.getToken(CEQLQueryParser.K_PARTITION, 0);
  }

  K_BY = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.K_BY);
    } else {
      return this.getToken(CEQLQueryParser.K_BY, i);
    }
  };

  partition_list() {
    return this.getTypedRuleContext(Partition_listContext, 0);
  }

  K_WITHIN() {
    return this.getToken(CEQLQueryParser.K_WITHIN, 0);
  }

  time_window() {
    return this.getTypedRuleContext(Time_windowContext, 0);
  }

  K_CONSUME() {
    return this.getToken(CEQLQueryParser.K_CONSUME, 0);
  }

  consumption_policy() {
    return this.getTypedRuleContext(Consumption_policyContext, 0);
  }

  K_LIMIT() {
    return this.getToken(CEQLQueryParser.K_LIMIT, 0);
  }

  limit() {
    return this.getTypedRuleContext(LimitContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCore_query(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCore_query(this);
    }
  }
}

class Selection_strategyContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_selection_strategy;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class Ss_lastContext extends Selection_strategyContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_LAST() {
    return this.getToken(CEQLQueryParser.K_LAST, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterSs_last(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitSs_last(this);
    }
  }
}

CEQLQueryParser.Ss_lastContext = Ss_lastContext;

class Ss_strictContext extends Selection_strategyContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_STRICT() {
    return this.getToken(CEQLQueryParser.K_STRICT, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterSs_strict(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitSs_strict(this);
    }
  }
}

CEQLQueryParser.Ss_strictContext = Ss_strictContext;

class Ss_anyContext extends Selection_strategyContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_ANY() {
    return this.getToken(CEQLQueryParser.K_ANY, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterSs_any(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitSs_any(this);
    }
  }
}

CEQLQueryParser.Ss_anyContext = Ss_anyContext;

class Ss_nextContext extends Selection_strategyContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_NEXT() {
    return this.getToken(CEQLQueryParser.K_NEXT, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterSs_next(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitSs_next(this);
    }
  }
}

CEQLQueryParser.Ss_nextContext = Ss_nextContext;

class Ss_maxContext extends Selection_strategyContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_MAX() {
    return this.getToken(CEQLQueryParser.K_MAX, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterSs_max(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitSs_max(this);
    }
  }
}

CEQLQueryParser.Ss_maxContext = Ss_maxContext;

class Ss_allContext extends Selection_strategyContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_ALL() {
    return this.getToken(CEQLQueryParser.K_ALL, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterSs_all(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitSs_all(this);
    }
  }
}

CEQLQueryParser.Ss_allContext = Ss_allContext;

class List_of_variablesContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_list_of_variables;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class S_starContext extends List_of_variablesContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  STAR() {
    return this.getToken(CEQLQueryParser.STAR, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterS_star(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitS_star(this);
    }
  }
}

CEQLQueryParser.S_starContext = S_starContext;

class S_list_of_variablesContext extends List_of_variablesContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  s_event_name = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(S_event_nameContext);
    } else {
      return this.getTypedRuleContext(S_event_nameContext, i);
    }
  };

  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.COMMA);
    } else {
      return this.getToken(CEQLQueryParser.COMMA, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterS_list_of_variables(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitS_list_of_variables(this);
    }
  }
}

CEQLQueryParser.S_list_of_variablesContext = S_list_of_variablesContext;

class S_noneContext extends List_of_variablesContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_NONE() {
    return this.getToken(CEQLQueryParser.K_NONE, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterS_none(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitS_none(this);
    }
  }
}

CEQLQueryParser.S_noneContext = S_noneContext;

class From_clauseContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_from_clause;
  }

  K_FROM() {
    return this.getToken(CEQLQueryParser.K_FROM, 0);
  }

  stream_name = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Stream_nameContext);
    } else {
      return this.getTypedRuleContext(Stream_nameContext, i);
    }
  };

  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.COMMA);
    } else {
      return this.getToken(CEQLQueryParser.COMMA, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterFrom_clause(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitFrom_clause(this);
    }
  }
}

class Cel_formulaContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_cel_formula;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class Contiguous_sequencing_cel_formulaContext extends Cel_formulaContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  cel_formula = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Cel_formulaContext);
    } else {
      return this.getTypedRuleContext(Cel_formulaContext, i);
    }
  };

  COLON() {
    return this.getToken(CEQLQueryParser.COLON, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterContiguous_sequencing_cel_formula(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitContiguous_sequencing_cel_formula(this);
    }
  }
}

CEQLQueryParser.Contiguous_sequencing_cel_formulaContext =
  Contiguous_sequencing_cel_formulaContext;

class Event_type_cel_formulaContext extends Cel_formulaContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  s_event_name() {
    return this.getTypedRuleContext(S_event_nameContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterEvent_type_cel_formula(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitEvent_type_cel_formula(this);
    }
  }
}

CEQLQueryParser.Event_type_cel_formulaContext = Event_type_cel_formulaContext;

class Contiguous_iteration_cel_formulaContext extends Cel_formulaContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  cel_formula() {
    return this.getTypedRuleContext(Cel_formulaContext, 0);
  }

  COLON_PLUS() {
    return this.getToken(CEQLQueryParser.COLON_PLUS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterContiguous_iteration_cel_formula(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitContiguous_iteration_cel_formula(this);
    }
  }
}

CEQLQueryParser.Contiguous_iteration_cel_formulaContext =
  Contiguous_iteration_cel_formulaContext;

class Par_cel_formulaContext extends Cel_formulaContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  LEFT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }

  cel_formula() {
    return this.getTypedRuleContext(Cel_formulaContext, 0);
  }

  RIGHT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterPar_cel_formula(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitPar_cel_formula(this);
    }
  }
}

CEQLQueryParser.Par_cel_formulaContext = Par_cel_formulaContext;

class Filter_cel_formulaContext extends Cel_formulaContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  cel_formula() {
    return this.getTypedRuleContext(Cel_formulaContext, 0);
  }

  K_FILTER() {
    return this.getToken(CEQLQueryParser.K_FILTER, 0);
  }

  filter() {
    return this.getTypedRuleContext(FilterContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterFilter_cel_formula(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitFilter_cel_formula(this);
    }
  }
}

CEQLQueryParser.Filter_cel_formulaContext = Filter_cel_formulaContext;

class Or_cel_formulaContext extends Cel_formulaContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  cel_formula = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Cel_formulaContext);
    } else {
      return this.getTypedRuleContext(Cel_formulaContext, i);
    }
  };

  K_OR() {
    return this.getToken(CEQLQueryParser.K_OR, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterOr_cel_formula(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitOr_cel_formula(this);
    }
  }
}

CEQLQueryParser.Or_cel_formulaContext = Or_cel_formulaContext;

class As_cel_formulaContext extends Cel_formulaContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  cel_formula() {
    return this.getTypedRuleContext(Cel_formulaContext, 0);
  }

  K_AS() {
    return this.getToken(CEQLQueryParser.K_AS, 0);
  }

  event_name() {
    return this.getTypedRuleContext(Event_nameContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterAs_cel_formula(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitAs_cel_formula(this);
    }
  }
}

CEQLQueryParser.As_cel_formulaContext = As_cel_formulaContext;

class Non_contiguous_sequencing_cel_formulaContext extends Cel_formulaContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  cel_formula = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Cel_formulaContext);
    } else {
      return this.getTypedRuleContext(Cel_formulaContext, i);
    }
  };

  SEMICOLON() {
    return this.getToken(CEQLQueryParser.SEMICOLON, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterNon_contiguous_sequencing_cel_formula(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitNon_contiguous_sequencing_cel_formula(this);
    }
  }
}

CEQLQueryParser.Non_contiguous_sequencing_cel_formulaContext =
  Non_contiguous_sequencing_cel_formulaContext;

class Non_contiguous_iteration_cel_formulaContext extends Cel_formulaContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  cel_formula() {
    return this.getTypedRuleContext(Cel_formulaContext, 0);
  }

  PLUS() {
    return this.getToken(CEQLQueryParser.PLUS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterNon_contiguous_iteration_cel_formula(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitNon_contiguous_iteration_cel_formula(this);
    }
  }
}

CEQLQueryParser.Non_contiguous_iteration_cel_formulaContext =
  Non_contiguous_iteration_cel_formulaContext;

class Partition_listContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_partition_list;
  }

  LEFT_SQUARE_BRACKET = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.LEFT_SQUARE_BRACKET);
    } else {
      return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, i);
    }
  };

  attribute_list = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Attribute_listContext);
    } else {
      return this.getTypedRuleContext(Attribute_listContext, i);
    }
  };

  RIGHT_SQUARE_BRACKET = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
    } else {
      return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, i);
    }
  };

  COMMA() {
    return this.getToken(CEQLQueryParser.COMMA, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterPartition_list(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitPartition_list(this);
    }
  }
}

class Attribute_listContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_attribute_list;
  }

  attribute_name = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Attribute_nameContext);
    } else {
      return this.getTypedRuleContext(Attribute_nameContext, i);
    }
  };

  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.COMMA);
    } else {
      return this.getToken(CEQLQueryParser.COMMA, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterAttribute_list(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitAttribute_list(this);
    }
  }
}

class Consumption_policyContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_consumption_policy;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class Cp_partitionContext extends Consumption_policyContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_PARTITION() {
    return this.getToken(CEQLQueryParser.K_PARTITION, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCp_partition(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCp_partition(this);
    }
  }
}

CEQLQueryParser.Cp_partitionContext = Cp_partitionContext;

class Cp_anyContext extends Consumption_policyContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_ANY() {
    return this.getToken(CEQLQueryParser.K_ANY, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCp_any(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCp_any(this);
    }
  }
}

CEQLQueryParser.Cp_anyContext = Cp_anyContext;

class Cp_noneContext extends Consumption_policyContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_NONE() {
    return this.getToken(CEQLQueryParser.K_NONE, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCp_none(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCp_none(this);
    }
  }
}

CEQLQueryParser.Cp_noneContext = Cp_noneContext;

class LimitContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_limit;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class L_integerContext extends LimitContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  integer() {
    return this.getTypedRuleContext(IntegerContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterL_integer(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitL_integer(this);
    }
  }
}

CEQLQueryParser.L_integerContext = L_integerContext;

class FilterContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_filter;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class Par_filterContext extends FilterContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  LEFT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }

  filter() {
    return this.getTypedRuleContext(FilterContext, 0);
  }

  RIGHT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterPar_filter(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitPar_filter(this);
    }
  }
}

CEQLQueryParser.Par_filterContext = Par_filterContext;

class And_filterContext extends FilterContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  filter = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(FilterContext);
    } else {
      return this.getTypedRuleContext(FilterContext, i);
    }
  };

  K_AND() {
    return this.getToken(CEQLQueryParser.K_AND, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterAnd_filter(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitAnd_filter(this);
    }
  }
}

CEQLQueryParser.And_filterContext = And_filterContext;

class Atomic_filterContext extends FilterContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  s_event_name() {
    return this.getTypedRuleContext(S_event_nameContext, 0);
  }

  LEFT_SQUARE_BRACKET() {
    return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, 0);
  }

  predicate() {
    return this.getTypedRuleContext(PredicateContext, 0);
  }

  RIGHT_SQUARE_BRACKET() {
    return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterAtomic_filter(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitAtomic_filter(this);
    }
  }
}

CEQLQueryParser.Atomic_filterContext = Atomic_filterContext;

class Or_filterContext extends FilterContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  filter = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(FilterContext);
    } else {
      return this.getTypedRuleContext(FilterContext, i);
    }
  };

  K_OR() {
    return this.getToken(CEQLQueryParser.K_OR, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterOr_filter(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitOr_filter(this);
    }
  }
}

CEQLQueryParser.Or_filterContext = Or_filterContext;

class PredicateContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_predicate;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class Regex_predicateContext extends PredicateContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  attribute_name() {
    return this.getTypedRuleContext(Attribute_nameContext, 0);
  }

  K_LIKE() {
    return this.getToken(CEQLQueryParser.K_LIKE, 0);
  }

  regexp() {
    return this.getTypedRuleContext(RegexpContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterRegex_predicate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitRegex_predicate(this);
    }
  }
}

CEQLQueryParser.Regex_predicateContext = Regex_predicateContext;

class In_range_predicateContext extends PredicateContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  math_expr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Math_exprContext);
    } else {
      return this.getTypedRuleContext(Math_exprContext, i);
    }
  };

  K_IN() {
    return this.getToken(CEQLQueryParser.K_IN, 0);
  }

  K_RANGE() {
    return this.getToken(CEQLQueryParser.K_RANGE, 0);
  }

  LEFT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }

  COMMA() {
    return this.getToken(CEQLQueryParser.COMMA, 0);
  }

  RIGHT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterIn_range_predicate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitIn_range_predicate(this);
    }
  }
}

CEQLQueryParser.In_range_predicateContext = In_range_predicateContext;

class In_predicateContext extends PredicateContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  attribute_name() {
    return this.getTypedRuleContext(Attribute_nameContext, 0);
  }

  value_seq() {
    return this.getTypedRuleContext(Value_seqContext, 0);
  }

  K_IN() {
    return this.getToken(CEQLQueryParser.K_IN, 0);
  }

  K_NOT() {
    return this.getToken(CEQLQueryParser.K_NOT, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterIn_predicate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitIn_predicate(this);
    }
  }
}

CEQLQueryParser.In_predicateContext = In_predicateContext;

class Not_predicateContext extends PredicateContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  K_NOT() {
    return this.getToken(CEQLQueryParser.K_NOT, 0);
  }

  predicate() {
    return this.getTypedRuleContext(PredicateContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterNot_predicate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitNot_predicate(this);
    }
  }
}

CEQLQueryParser.Not_predicateContext = Not_predicateContext;

class Par_predicateContext extends PredicateContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  LEFT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }

  predicate() {
    return this.getTypedRuleContext(PredicateContext, 0);
  }

  RIGHT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterPar_predicate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitPar_predicate(this);
    }
  }
}

CEQLQueryParser.Par_predicateContext = Par_predicateContext;

class And_predicateContext extends PredicateContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  predicate = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(PredicateContext);
    } else {
      return this.getTypedRuleContext(PredicateContext, i);
    }
  };

  K_AND() {
    return this.getToken(CEQLQueryParser.K_AND, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterAnd_predicate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitAnd_predicate(this);
    }
  }
}

CEQLQueryParser.And_predicateContext = And_predicateContext;

class Equality_string_predicateContext extends PredicateContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  string_literal() {
    return this.getTypedRuleContext(String_literalContext, 0);
  }

  string_literal_or_regexp() {
    return this.getTypedRuleContext(String_literal_or_regexpContext, 0);
  }

  EQ() {
    return this.getToken(CEQLQueryParser.EQ, 0);
  }

  NEQ() {
    return this.getToken(CEQLQueryParser.NEQ, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterEquality_string_predicate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitEquality_string_predicate(this);
    }
  }
}

CEQLQueryParser.Equality_string_predicateContext =
  Equality_string_predicateContext;

class Inequality_predicateContext extends PredicateContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  math_expr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Math_exprContext);
    } else {
      return this.getTypedRuleContext(Math_exprContext, i);
    }
  };

  LE() {
    return this.getToken(CEQLQueryParser.LE, 0);
  }

  LEQ() {
    return this.getToken(CEQLQueryParser.LEQ, 0);
  }

  GE() {
    return this.getToken(CEQLQueryParser.GE, 0);
  }

  GEQ() {
    return this.getToken(CEQLQueryParser.GEQ, 0);
  }

  EQ() {
    return this.getToken(CEQLQueryParser.EQ, 0);
  }

  NEQ() {
    return this.getToken(CEQLQueryParser.NEQ, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterInequality_predicate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitInequality_predicate(this);
    }
  }
}

CEQLQueryParser.Inequality_predicateContext = Inequality_predicateContext;

class Or_predicateContext extends PredicateContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  predicate = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(PredicateContext);
    } else {
      return this.getTypedRuleContext(PredicateContext, i);
    }
  };

  K_OR() {
    return this.getToken(CEQLQueryParser.K_OR, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterOr_predicate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitOr_predicate(this);
    }
  }
}

CEQLQueryParser.Or_predicateContext = Or_predicateContext;

class String_literalContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_string_literal;
  }

  string() {
    return this.getTypedRuleContext(StringContext, 0);
  }

  attribute_name() {
    return this.getTypedRuleContext(Attribute_nameContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterString_literal(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitString_literal(this);
    }
  }
}

class String_literal_or_regexpContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_string_literal_or_regexp;
  }

  string() {
    return this.getTypedRuleContext(StringContext, 0);
  }

  attribute_name() {
    return this.getTypedRuleContext(Attribute_nameContext, 0);
  }

  regexp() {
    return this.getTypedRuleContext(RegexpContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterString_literal_or_regexp(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitString_literal_or_regexp(this);
    }
  }
}

class Math_exprContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_math_expr;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class Mul_math_exprContext extends Math_exprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  math_expr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Math_exprContext);
    } else {
      return this.getTypedRuleContext(Math_exprContext, i);
    }
  };

  STAR() {
    return this.getToken(CEQLQueryParser.STAR, 0);
  }

  SLASH() {
    return this.getToken(CEQLQueryParser.SLASH, 0);
  }

  PERCENT() {
    return this.getToken(CEQLQueryParser.PERCENT, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterMul_math_expr(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitMul_math_expr(this);
    }
  }
}

CEQLQueryParser.Mul_math_exprContext = Mul_math_exprContext;

class Sum_math_exprContext extends Math_exprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  math_expr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Math_exprContext);
    } else {
      return this.getTypedRuleContext(Math_exprContext, i);
    }
  };

  PLUS() {
    return this.getToken(CEQLQueryParser.PLUS, 0);
  }

  MINUS() {
    return this.getToken(CEQLQueryParser.MINUS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterSum_math_expr(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitSum_math_expr(this);
    }
  }
}

CEQLQueryParser.Sum_math_exprContext = Sum_math_exprContext;

class Number_math_exprContext extends Math_exprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterNumber_math_expr(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitNumber_math_expr(this);
    }
  }
}

CEQLQueryParser.Number_math_exprContext = Number_math_exprContext;

class Unary_math_exprContext extends Math_exprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  math_expr() {
    return this.getTypedRuleContext(Math_exprContext, 0);
  }

  PLUS() {
    return this.getToken(CEQLQueryParser.PLUS, 0);
  }

  MINUS() {
    return this.getToken(CEQLQueryParser.MINUS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterUnary_math_expr(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitUnary_math_expr(this);
    }
  }
}

CEQLQueryParser.Unary_math_exprContext = Unary_math_exprContext;

class Attribute_math_exprContext extends Math_exprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  attribute_name() {
    return this.getTypedRuleContext(Attribute_nameContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterAttribute_math_expr(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitAttribute_math_expr(this);
    }
  }
}

CEQLQueryParser.Attribute_math_exprContext = Attribute_math_exprContext;

class Par_math_exprContext extends Math_exprContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  LEFT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
  }

  math_expr() {
    return this.getTypedRuleContext(Math_exprContext, 0);
  }

  RIGHT_PARENTHESIS() {
    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterPar_math_expr(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitPar_math_expr(this);
    }
  }
}

CEQLQueryParser.Par_math_exprContext = Par_math_exprContext;

class Value_seqContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_value_seq;
  }

  LEFT_CURLY_BRACKET() {
    return this.getToken(CEQLQueryParser.LEFT_CURLY_BRACKET, 0);
  }

  number_seq() {
    return this.getTypedRuleContext(Number_seqContext, 0);
  }

  RIGHT_CURLY_BRACKET() {
    return this.getToken(CEQLQueryParser.RIGHT_CURLY_BRACKET, 0);
  }

  string_seq() {
    return this.getTypedRuleContext(String_seqContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterValue_seq(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitValue_seq(this);
    }
  }
}

class Number_seqContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_number_seq;
  }

  copyFrom(ctx) {
    super.copyFrom(ctx);
  }
}

class Number_listContext extends Number_seqContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  number = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(NumberContext);
    } else {
      return this.getTypedRuleContext(NumberContext, i);
    }
  };

  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.COMMA);
    } else {
      return this.getToken(CEQLQueryParser.COMMA, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterNumber_list(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitNumber_list(this);
    }
  }
}

CEQLQueryParser.Number_listContext = Number_listContext;

class Double_rangeContext extends Number_seqContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  double_ = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(DoubleContext);
    } else {
      return this.getTypedRuleContext(DoubleContext, i);
    }
  };

  DOUBLE_DOT() {
    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterDouble_range(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitDouble_range(this);
    }
  }
}

CEQLQueryParser.Double_rangeContext = Double_rangeContext;

class Number_range_lowerContext extends Number_seqContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  DOUBLE_DOT() {
    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterNumber_range_lower(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitNumber_range_lower(this);
    }
  }
}

CEQLQueryParser.Number_range_lowerContext = Number_range_lowerContext;

class Number_range_upperContext extends Number_seqContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  DOUBLE_DOT() {
    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterNumber_range_upper(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitNumber_range_upper(this);
    }
  }
}

CEQLQueryParser.Number_range_upperContext = Number_range_upperContext;

class Integer_rangeContext extends Number_seqContext {
  constructor(parser, ctx) {
    super(parser);
    super.copyFrom(ctx);
  }

  integer = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(IntegerContext);
    } else {
      return this.getTypedRuleContext(IntegerContext, i);
    }
  };

  DOUBLE_DOT() {
    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterInteger_range(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitInteger_range(this);
    }
  }
}

CEQLQueryParser.Integer_rangeContext = Integer_rangeContext;

class String_seqContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_string_seq;
  }

  string = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(StringContext);
    } else {
      return this.getTypedRuleContext(StringContext, i);
    }
  };

  COMMA = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.COMMA);
    } else {
      return this.getToken(CEQLQueryParser.COMMA, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterString_seq(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitString_seq(this);
    }
  }
}

class Time_windowContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_time_window;
  }

  event_span() {
    return this.getTypedRuleContext(Event_spanContext, 0);
  }

  time_span() {
    return this.getTypedRuleContext(Time_spanContext, 0);
  }

  custom_span() {
    return this.getTypedRuleContext(Custom_spanContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterTime_window(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitTime_window(this);
    }
  }
}

class Event_spanContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_event_span;
  }

  integer() {
    return this.getTypedRuleContext(IntegerContext, 0);
  }

  K_EVENTS() {
    return this.getToken(CEQLQueryParser.K_EVENTS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterEvent_span(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitEvent_span(this);
    }
  }
}

class Time_spanContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_time_span;
  }

  hour_span() {
    return this.getTypedRuleContext(Hour_spanContext, 0);
  }

  minute_span() {
    return this.getTypedRuleContext(Minute_spanContext, 0);
  }

  second_span() {
    return this.getTypedRuleContext(Second_spanContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterTime_span(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitTime_span(this);
    }
  }
}

class Hour_spanContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_hour_span;
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  K_HOURS() {
    return this.getToken(CEQLQueryParser.K_HOURS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterHour_span(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitHour_span(this);
    }
  }
}

class Minute_spanContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_minute_span;
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  K_MINUTES() {
    return this.getToken(CEQLQueryParser.K_MINUTES, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterMinute_span(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitMinute_span(this);
    }
  }
}

class Second_spanContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_second_span;
  }

  number() {
    return this.getTypedRuleContext(NumberContext, 0);
  }

  K_SECONDS() {
    return this.getToken(CEQLQueryParser.K_SECONDS, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterSecond_span(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitSecond_span(this);
    }
  }
}

class Custom_spanContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_custom_span;
  }

  integer() {
    return this.getTypedRuleContext(IntegerContext, 0);
  }

  LEFT_SQUARE_BRACKET() {
    return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, 0);
  }

  any_name() {
    return this.getTypedRuleContext(Any_nameContext, 0);
  }

  RIGHT_SQUARE_BRACKET() {
    return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCustom_span(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCustom_span(this);
    }
  }
}

class Named_eventContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_named_event;
  }

  s_event_name() {
    return this.getTypedRuleContext(S_event_nameContext, 0);
  }

  K_AS() {
    return this.getToken(CEQLQueryParser.K_AS, 0);
  }

  event_name() {
    return this.getTypedRuleContext(Event_nameContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterNamed_event(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitNamed_event(this);
    }
  }
}

class S_event_nameContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_s_event_name;
  }

  event_name() {
    return this.getTypedRuleContext(Event_nameContext, 0);
  }

  stream_name() {
    return this.getTypedRuleContext(Stream_nameContext, 0);
  }

  GE() {
    return this.getToken(CEQLQueryParser.GE, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterS_event_name(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitS_event_name(this);
    }
  }
}

class Event_nameContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_event_name;
  }

  any_name() {
    return this.getTypedRuleContext(Any_nameContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterEvent_name(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitEvent_name(this);
    }
  }
}

class Stream_nameContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_stream_name;
  }

  any_name() {
    return this.getTypedRuleContext(Any_nameContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterStream_name(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitStream_name(this);
    }
  }
}

class Attribute_nameContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_attribute_name;
  }

  any_name() {
    return this.getTypedRuleContext(Any_nameContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterAttribute_name(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitAttribute_name(this);
    }
  }
}

class IntegerContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_integer;
  }

  INTEGER_LITERAL() {
    return this.getToken(CEQLQueryParser.INTEGER_LITERAL, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterInteger(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitInteger(this);
    }
  }
}

class DoubleContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_double;
  }

  DOUBLE_LITERAL() {
    return this.getToken(CEQLQueryParser.DOUBLE_LITERAL, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterDouble(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitDouble(this);
    }
  }
}

class NumberContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_number;
  }

  integer() {
    return this.getTypedRuleContext(IntegerContext, 0);
  }

  double_() {
    return this.getTypedRuleContext(DoubleContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterNumber(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitNumber(this);
    }
  }
}

class StringContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_string;
  }

  STRING_LITERAL() {
    return this.getToken(CEQLQueryParser.STRING_LITERAL, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterString(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitString(this);
    }
  }
}

class Any_nameContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_any_name;
  }

  IDENTIFIER() {
    return this.getToken(CEQLQueryParser.IDENTIFIER, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterAny_name(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitAny_name(this);
    }
  }
}

class KeywordContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_keyword;
  }

  K_ALL() {
    return this.getToken(CEQLQueryParser.K_ALL, 0);
  }

  K_AND() {
    return this.getToken(CEQLQueryParser.K_AND, 0);
  }

  K_ANY() {
    return this.getToken(CEQLQueryParser.K_ANY, 0);
  }

  K_AS() {
    return this.getToken(CEQLQueryParser.K_AS, 0);
  }

  K_BY() {
    return this.getToken(CEQLQueryParser.K_BY, 0);
  }

  K_CONSUME() {
    return this.getToken(CEQLQueryParser.K_CONSUME, 0);
  }

  K_DISTINCT() {
    return this.getToken(CEQLQueryParser.K_DISTINCT, 0);
  }

  K_EVENT() {
    return this.getToken(CEQLQueryParser.K_EVENT, 0);
  }

  K_EVENTS() {
    return this.getToken(CEQLQueryParser.K_EVENTS, 0);
  }

  K_FILTER() {
    return this.getToken(CEQLQueryParser.K_FILTER, 0);
  }

  K_FROM() {
    return this.getToken(CEQLQueryParser.K_FROM, 0);
  }

  K_HOURS() {
    return this.getToken(CEQLQueryParser.K_HOURS, 0);
  }

  K_IN() {
    return this.getToken(CEQLQueryParser.K_IN, 0);
  }

  K_LAST() {
    return this.getToken(CEQLQueryParser.K_LAST, 0);
  }

  K_LIKE() {
    return this.getToken(CEQLQueryParser.K_LIKE, 0);
  }

  K_MAX() {
    return this.getToken(CEQLQueryParser.K_MAX, 0);
  }

  K_MINUTES() {
    return this.getToken(CEQLQueryParser.K_MINUTES, 0);
  }

  K_NEXT() {
    return this.getToken(CEQLQueryParser.K_NEXT, 0);
  }

  K_NONE() {
    return this.getToken(CEQLQueryParser.K_NONE, 0);
  }

  K_NOT() {
    return this.getToken(CEQLQueryParser.K_NOT, 0);
  }

  K_OR() {
    return this.getToken(CEQLQueryParser.K_OR, 0);
  }

  K_PARTITION() {
    return this.getToken(CEQLQueryParser.K_PARTITION, 0);
  }

  K_RANGE() {
    return this.getToken(CEQLQueryParser.K_RANGE, 0);
  }

  K_SECONDS() {
    return this.getToken(CEQLQueryParser.K_SECONDS, 0);
  }

  K_SELECT() {
    return this.getToken(CEQLQueryParser.K_SELECT, 0);
  }

  K_STREAM() {
    return this.getToken(CEQLQueryParser.K_STREAM, 0);
  }

  K_STRICT() {
    return this.getToken(CEQLQueryParser.K_STRICT, 0);
  }

  K_UNLESS() {
    return this.getToken(CEQLQueryParser.K_UNLESS, 0);
  }

  K_WHERE() {
    return this.getToken(CEQLQueryParser.K_WHERE, 0);
  }

  K_WITHIN() {
    return this.getToken(CEQLQueryParser.K_WITHIN, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterKeyword(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitKeyword(this);
    }
  }
}

class RegexpContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_regexp;
  }

  REGEX_START() {
    return this.getToken(CEQLQueryParser.REGEX_START, 0);
  }

  regexp_alternation() {
    return this.getTypedRuleContext(Regexp_alternationContext, 0);
  }

  REGEX_END() {
    return this.getToken(CEQLQueryParser.REGEX_END, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterRegexp(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitRegexp(this);
    }
  }
}

class Regexp_alternationContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_regexp_alternation;
  }

  regexp_exp = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Regexp_expContext);
    } else {
      return this.getTypedRuleContext(Regexp_expContext, i);
    }
  };

  REGEX_PIPE = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.REGEX_PIPE);
    } else {
      return this.getToken(CEQLQueryParser.REGEX_PIPE, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterRegexp_alternation(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitRegexp_alternation(this);
    }
  }
}

class Regexp_expContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_regexp_exp;
  }

  regexp_element = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Regexp_elementContext);
    } else {
      return this.getTypedRuleContext(Regexp_elementContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterRegexp_exp(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitRegexp_exp(this);
    }
  }
}

class Regexp_elementContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_regexp_element;
  }

  regexp_group() {
    return this.getTypedRuleContext(Regexp_groupContext, 0);
  }

  quantifier() {
    return this.getTypedRuleContext(QuantifierContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterRegexp_element(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitRegexp_element(this);
    }
  }
}

class Regexp_groupContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_regexp_group;
  }

  parenthesis() {
    return this.getTypedRuleContext(ParenthesisContext, 0);
  }

  atom() {
    return this.getTypedRuleContext(AtomContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterRegexp_group(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitRegexp_group(this);
    }
  }
}

class ParenthesisContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_parenthesis;
  }

  REGEX_L_PAR() {
    return this.getToken(CEQLQueryParser.REGEX_L_PAR, 0);
  }

  regexp_alternation() {
    return this.getTypedRuleContext(Regexp_alternationContext, 0);
  }

  REGEX_R_PAR() {
    return this.getToken(CEQLQueryParser.REGEX_R_PAR, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterParenthesis(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitParenthesis(this);
    }
  }
}

class QuantifierContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_quantifier;
  }

  REGEX_QUESTION() {
    return this.getToken(CEQLQueryParser.REGEX_QUESTION, 0);
  }

  REGEX_PLUS() {
    return this.getToken(CEQLQueryParser.REGEX_PLUS, 0);
  }

  REGEX_STAR() {
    return this.getToken(CEQLQueryParser.REGEX_STAR, 0);
  }

  REGEX_L_CURLY() {
    return this.getToken(CEQLQueryParser.REGEX_L_CURLY, 0);
  }

  quantity() {
    return this.getTypedRuleContext(QuantityContext, 0);
  }

  REGEX_R_CURLY() {
    return this.getToken(CEQLQueryParser.REGEX_R_CURLY, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterQuantifier(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitQuantifier(this);
    }
  }
}

class QuantityContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_quantity;
  }

  quantExact() {
    return this.getTypedRuleContext(QuantExactContext, 0);
  }

  quantRange() {
    return this.getTypedRuleContext(QuantRangeContext, 0);
  }

  quantMin() {
    return this.getTypedRuleContext(QuantMinContext, 0);
  }

  quantMax() {
    return this.getTypedRuleContext(QuantMaxContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterQuantity(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitQuantity(this);
    }
  }
}

class QuantExactContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_quantExact;
  }

  regexp_number() {
    return this.getTypedRuleContext(Regexp_numberContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterQuantExact(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitQuantExact(this);
    }
  }
}

class QuantRangeContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_quantRange;
  }

  regexp_number = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Regexp_numberContext);
    } else {
      return this.getTypedRuleContext(Regexp_numberContext, i);
    }
  };

  REGEX_COMMA() {
    return this.getToken(CEQLQueryParser.REGEX_COMMA, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterQuantRange(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitQuantRange(this);
    }
  }
}

class QuantMinContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_quantMin;
  }

  regexp_number() {
    return this.getTypedRuleContext(Regexp_numberContext, 0);
  }

  REGEX_COMMA() {
    return this.getToken(CEQLQueryParser.REGEX_COMMA, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterQuantMin(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitQuantMin(this);
    }
  }
}

class QuantMaxContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_quantMax;
  }

  REGEX_COMMA() {
    return this.getToken(CEQLQueryParser.REGEX_COMMA, 0);
  }

  regexp_number() {
    return this.getTypedRuleContext(Regexp_numberContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterQuantMax(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitQuantMax(this);
    }
  }
}

class AtomContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_atom;
  }

  characterClass() {
    return this.getTypedRuleContext(CharacterClassContext, 0);
  }

  sharedAtom() {
    return this.getTypedRuleContext(SharedAtomContext, 0);
  }

  literal() {
    return this.getTypedRuleContext(LiteralContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterAtom(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitAtom(this);
    }
  }
}

class CharacterClassContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_characterClass;
  }

  REGEX_L_BRACK() {
    return this.getToken(CEQLQueryParser.REGEX_L_BRACK, 0);
  }

  REGEX_R_BRACK() {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }

  REGEX_HAT() {
    return this.getToken(CEQLQueryParser.REGEX_HAT, 0);
  }

  ccAtom = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(CcAtomContext);
    } else {
      return this.getTypedRuleContext(CcAtomContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCharacterClass(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCharacterClass(this);
    }
  }
}

class CcAtomContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_ccAtom;
  }

  ccRange() {
    return this.getTypedRuleContext(CcRangeContext, 0);
  }

  sharedAtom() {
    return this.getTypedRuleContext(SharedAtomContext, 0);
  }

  ccSingle() {
    return this.getTypedRuleContext(CcSingleContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCcAtom(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCcAtom(this);
    }
  }
}

class CcRangeContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_ccRange;
  }

  ccLiteral = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(CcLiteralContext);
    } else {
      return this.getTypedRuleContext(CcLiteralContext, i);
    }
  };

  REGEX_HYPHEN() {
    return this.getToken(CEQLQueryParser.REGEX_HYPHEN, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCcRange(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCcRange(this);
    }
  }
}

class CcSingleContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_ccSingle;
  }

  ccLiteral() {
    return this.getTypedRuleContext(CcLiteralContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCcSingle(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCcSingle(this);
    }
  }
}

class CcLiteralContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_ccLiteral;
  }

  ccEscapes() {
    return this.getTypedRuleContext(CcEscapesContext, 0);
  }

  ccOther() {
    return this.getTypedRuleContext(CcOtherContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCcLiteral(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCcLiteral(this);
    }
  }
}

class CcEscapesContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_ccEscapes;
  }

  REGEX_BACKSLASH = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.REGEX_BACKSLASH);
    } else {
      return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, i);
    }
  };

  REGEX_HAT() {
    return this.getToken(CEQLQueryParser.REGEX_HAT, 0);
  }

  REGEX_HYPHEN() {
    return this.getToken(CEQLQueryParser.REGEX_HYPHEN, 0);
  }

  REGEX_R_BRACK() {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCcEscapes(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCcEscapes(this);
    }
  }
}

class CcOtherContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_ccOther;
  }

  REGEX_HAT() {
    return this.getToken(CEQLQueryParser.REGEX_HAT, 0);
  }

  REGEX_HYPHEN() {
    return this.getToken(CEQLQueryParser.REGEX_HYPHEN, 0);
  }

  REGEX_R_BRACK() {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }

  REGEX_BACKSLASH() {
    return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterCcOther(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitCcOther(this);
    }
  }
}

class LiteralContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_literal;
  }

  escapes() {
    return this.getTypedRuleContext(EscapesContext, 0);
  }

  REGEX_DOT() {
    return this.getToken(CEQLQueryParser.REGEX_DOT, 0);
  }

  other() {
    return this.getTypedRuleContext(OtherContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterLiteral(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitLiteral(this);
    }
  }
}

class EscapesContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_escapes;
  }

  REGEX_BACKSLASH = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.REGEX_BACKSLASH);
    } else {
      return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, i);
    }
  };

  REGEX_L_BRACK() {
    return this.getToken(CEQLQueryParser.REGEX_L_BRACK, 0);
  }

  REGEX_R_BRACK() {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }

  REGEX_L_PAR() {
    return this.getToken(CEQLQueryParser.REGEX_L_PAR, 0);
  }

  REGEX_R_PAR() {
    return this.getToken(CEQLQueryParser.REGEX_R_PAR, 0);
  }

  REGEX_L_CURLY() {
    return this.getToken(CEQLQueryParser.REGEX_L_CURLY, 0);
  }

  REGEX_R_CURLY() {
    return this.getToken(CEQLQueryParser.REGEX_R_CURLY, 0);
  }

  REGEX_STAR() {
    return this.getToken(CEQLQueryParser.REGEX_STAR, 0);
  }

  REGEX_PLUS() {
    return this.getToken(CEQLQueryParser.REGEX_PLUS, 0);
  }

  REGEX_QUESTION() {
    return this.getToken(CEQLQueryParser.REGEX_QUESTION, 0);
  }

  REGEX_PIPE() {
    return this.getToken(CEQLQueryParser.REGEX_PIPE, 0);
  }

  REGEX_DOT() {
    return this.getToken(CEQLQueryParser.REGEX_DOT, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterEscapes(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitEscapes(this);
    }
  }
}

class OtherContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_other;
  }

  REGEX_L_BRACK() {
    return this.getToken(CEQLQueryParser.REGEX_L_BRACK, 0);
  }

  REGEX_R_BRACK() {
    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
  }

  REGEX_L_PAR() {
    return this.getToken(CEQLQueryParser.REGEX_L_PAR, 0);
  }

  REGEX_R_PAR() {
    return this.getToken(CEQLQueryParser.REGEX_R_PAR, 0);
  }

  REGEX_L_CURLY() {
    return this.getToken(CEQLQueryParser.REGEX_L_CURLY, 0);
  }

  REGEX_R_CURLY() {
    return this.getToken(CEQLQueryParser.REGEX_R_CURLY, 0);
  }

  REGEX_STAR() {
    return this.getToken(CEQLQueryParser.REGEX_STAR, 0);
  }

  REGEX_PLUS() {
    return this.getToken(CEQLQueryParser.REGEX_PLUS, 0);
  }

  REGEX_QUESTION() {
    return this.getToken(CEQLQueryParser.REGEX_QUESTION, 0);
  }

  REGEX_PIPE() {
    return this.getToken(CEQLQueryParser.REGEX_PIPE, 0);
  }

  REGEX_BACKSLASH() {
    return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterOther(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitOther(this);
    }
  }
}

class SharedAtomContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_sharedAtom;
  }

  REGEX_DECIMAL_DIGIT() {
    return this.getToken(CEQLQueryParser.REGEX_DECIMAL_DIGIT, 0);
  }

  REGEX_NOT_DECIMAL_DIGIT() {
    return this.getToken(CEQLQueryParser.REGEX_NOT_DECIMAL_DIGIT, 0);
  }

  REGEX_WHITESPACE() {
    return this.getToken(CEQLQueryParser.REGEX_WHITESPACE, 0);
  }

  REGEX_NOT_WHITESPACE() {
    return this.getToken(CEQLQueryParser.REGEX_NOT_WHITESPACE, 0);
  }

  REGEX_ALPHANUMERIC() {
    return this.getToken(CEQLQueryParser.REGEX_ALPHANUMERIC, 0);
  }

  REGEX_NOT_ALPHANUMERIC() {
    return this.getToken(CEQLQueryParser.REGEX_NOT_ALPHANUMERIC, 0);
  }

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterSharedAtom(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitSharedAtom(this);
    }
  }
}

class Regexp_numberContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CEQLQueryParser.RULE_regexp_number;
  }

  REGEX_DIGIT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(CEQLQueryParser.REGEX_DIGIT);
    } else {
      return this.getToken(CEQLQueryParser.REGEX_DIGIT, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.enterRegexp_number(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof CEQLQueryParserListener) {
      listener.exitRegexp_number(this);
    }
  }
}

CEQLQueryParser.ParseContext = ParseContext;
CEQLQueryParser.ErrorContext = ErrorContext;
CEQLQueryParser.Core_queryContext = Core_queryContext;
CEQLQueryParser.Selection_strategyContext = Selection_strategyContext;
CEQLQueryParser.List_of_variablesContext = List_of_variablesContext;
CEQLQueryParser.From_clauseContext = From_clauseContext;
CEQLQueryParser.Cel_formulaContext = Cel_formulaContext;
CEQLQueryParser.Partition_listContext = Partition_listContext;
CEQLQueryParser.Attribute_listContext = Attribute_listContext;
CEQLQueryParser.Consumption_policyContext = Consumption_policyContext;
CEQLQueryParser.LimitContext = LimitContext;
CEQLQueryParser.FilterContext = FilterContext;
CEQLQueryParser.PredicateContext = PredicateContext;
CEQLQueryParser.String_literalContext = String_literalContext;
CEQLQueryParser.String_literal_or_regexpContext =
  String_literal_or_regexpContext;
CEQLQueryParser.Math_exprContext = Math_exprContext;
CEQLQueryParser.Value_seqContext = Value_seqContext;
CEQLQueryParser.Number_seqContext = Number_seqContext;
CEQLQueryParser.String_seqContext = String_seqContext;
CEQLQueryParser.Time_windowContext = Time_windowContext;
CEQLQueryParser.Event_spanContext = Event_spanContext;
CEQLQueryParser.Time_spanContext = Time_spanContext;
CEQLQueryParser.Hour_spanContext = Hour_spanContext;
CEQLQueryParser.Minute_spanContext = Minute_spanContext;
CEQLQueryParser.Second_spanContext = Second_spanContext;
CEQLQueryParser.Custom_spanContext = Custom_spanContext;
CEQLQueryParser.Named_eventContext = Named_eventContext;
CEQLQueryParser.S_event_nameContext = S_event_nameContext;
CEQLQueryParser.Event_nameContext = Event_nameContext;
CEQLQueryParser.Stream_nameContext = Stream_nameContext;
CEQLQueryParser.Attribute_nameContext = Attribute_nameContext;
CEQLQueryParser.IntegerContext = IntegerContext;
CEQLQueryParser.DoubleContext = DoubleContext;
CEQLQueryParser.NumberContext = NumberContext;
CEQLQueryParser.StringContext = StringContext;
CEQLQueryParser.Any_nameContext = Any_nameContext;
CEQLQueryParser.KeywordContext = KeywordContext;
CEQLQueryParser.RegexpContext = RegexpContext;
CEQLQueryParser.Regexp_alternationContext = Regexp_alternationContext;
CEQLQueryParser.Regexp_expContext = Regexp_expContext;
CEQLQueryParser.Regexp_elementContext = Regexp_elementContext;
CEQLQueryParser.Regexp_groupContext = Regexp_groupContext;
CEQLQueryParser.ParenthesisContext = ParenthesisContext;
CEQLQueryParser.QuantifierContext = QuantifierContext;
CEQLQueryParser.QuantityContext = QuantityContext;
CEQLQueryParser.QuantExactContext = QuantExactContext;
CEQLQueryParser.QuantRangeContext = QuantRangeContext;
CEQLQueryParser.QuantMinContext = QuantMinContext;
CEQLQueryParser.QuantMaxContext = QuantMaxContext;
CEQLQueryParser.AtomContext = AtomContext;
CEQLQueryParser.CharacterClassContext = CharacterClassContext;
CEQLQueryParser.CcAtomContext = CcAtomContext;
CEQLQueryParser.CcRangeContext = CcRangeContext;
CEQLQueryParser.CcSingleContext = CcSingleContext;
CEQLQueryParser.CcLiteralContext = CcLiteralContext;
CEQLQueryParser.CcEscapesContext = CcEscapesContext;
CEQLQueryParser.CcOtherContext = CcOtherContext;
CEQLQueryParser.LiteralContext = LiteralContext;
CEQLQueryParser.EscapesContext = EscapesContext;
CEQLQueryParser.OtherContext = OtherContext;
CEQLQueryParser.SharedAtomContext = SharedAtomContext;
CEQLQueryParser.Regexp_numberContext = Regexp_numberContext;
