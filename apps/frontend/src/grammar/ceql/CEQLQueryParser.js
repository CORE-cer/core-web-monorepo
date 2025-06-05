// Generated from src/grammar/ceql/CEQLQueryParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CEQLQueryParserListener from './CEQLQueryParserListener.js';
const serializedATN = [4,1,91,604,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,1,0,1,0,5,0,133,8,0,10,0,12,0,136,9,0,1,0,1,0,1,1,1,1,1,1,1,
2,1,2,3,2,145,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,154,8,2,1,2,1,2,3,2,158,
8,2,1,2,1,2,1,2,3,2,163,8,2,1,2,1,2,3,2,167,8,2,1,3,1,3,1,3,1,3,1,3,1,3,
3,3,175,8,3,1,4,1,4,1,4,1,4,1,4,5,4,182,8,4,10,4,12,4,185,9,4,3,4,187,8,
4,1,5,1,5,1,5,1,5,5,5,193,8,5,10,5,12,5,196,9,5,3,5,198,8,5,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,211,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,232,8,6,10,6,12,6,235,
9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,245,8,7,1,8,1,8,1,8,5,8,250,8,8,
10,8,12,8,253,9,8,1,9,1,9,1,9,3,9,258,8,9,1,10,1,10,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,3,11,272,8,11,1,11,1,11,1,11,1,11,1,11,1,11,
5,11,280,8,11,10,11,12,11,283,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,3,12,308,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
3,12,321,8,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,329,8,12,10,12,12,12,332,
9,12,1,13,1,13,3,13,336,8,13,1,14,1,14,1,14,3,14,341,8,14,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,3,15,352,8,15,1,15,1,15,1,15,1,15,1,15,1,15,
5,15,360,8,15,10,15,12,15,363,9,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,3,16,373,8,16,1,17,1,17,1,17,5,17,378,8,17,10,17,12,17,381,9,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,396,8,17,
1,18,1,18,1,18,5,18,401,8,18,10,18,12,18,404,9,18,1,19,1,19,1,19,3,19,409,
8,19,1,20,1,20,1,20,1,21,3,21,415,8,21,1,21,3,21,418,8,21,1,21,3,21,421,
8,21,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,
25,1,26,1,26,1,26,3,26,440,8,26,1,27,1,27,1,27,1,27,1,27,3,27,447,8,27,1,
28,1,28,1,28,3,28,452,8,28,1,28,1,28,1,29,1,29,1,30,1,30,1,30,1,30,1,30,
1,30,5,30,464,8,30,10,30,12,30,467,9,30,1,31,1,31,1,32,1,32,1,32,5,32,474,
8,32,10,32,12,32,477,9,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,3,36,487,
8,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,40,1,40,1,41,1,41,1,41,5,
41,502,8,41,10,41,12,41,505,9,41,1,42,4,42,508,8,42,11,42,12,42,509,1,43,
1,43,3,43,514,8,43,1,44,1,44,3,44,518,8,44,1,45,1,45,1,45,1,45,1,46,1,46,
1,46,1,46,1,46,1,46,1,46,3,46,531,8,46,1,47,1,47,1,47,1,47,3,47,537,8,47,
1,48,1,48,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,51,1,51,1,51,1,52,1,52,1,
52,3,52,554,8,52,1,53,1,53,3,53,558,8,53,1,53,4,53,561,8,53,11,53,12,53,
562,1,53,1,53,1,54,1,54,1,54,3,54,570,8,54,1,55,1,55,1,55,1,55,1,56,1,56,
1,57,1,57,3,57,580,8,57,1,58,1,58,1,58,1,59,1,59,1,60,1,60,1,60,3,60,590,
8,60,1,61,1,61,1,61,1,62,1,62,1,63,1,63,1,64,4,64,600,8,64,11,64,12,64,601,
1,64,0,5,12,22,24,30,60,65,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,
82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,
124,126,128,0,10,2,0,21,21,67,67,1,0,37,42,1,0,41,42,1,0,33,34,2,0,32,32,
35,36,2,0,1,6,8,31,2,0,76,77,79,80,5,0,66,66,68,71,73,75,78,80,82,82,4,0,
66,66,68,71,73,75,78,80,1,0,85,90,626,0,134,1,0,0,0,2,139,1,0,0,0,4,142,
1,0,0,0,6,174,1,0,0,0,8,186,1,0,0,0,10,197,1,0,0,0,12,210,1,0,0,0,14,236,
1,0,0,0,16,246,1,0,0,0,18,257,1,0,0,0,20,259,1,0,0,0,22,271,1,0,0,0,24,320,
1,0,0,0,26,335,1,0,0,0,28,340,1,0,0,0,30,351,1,0,0,0,32,372,1,0,0,0,34,395,
1,0,0,0,36,397,1,0,0,0,38,408,1,0,0,0,40,410,1,0,0,0,42,414,1,0,0,0,44,422,
1,0,0,0,46,425,1,0,0,0,48,428,1,0,0,0,50,431,1,0,0,0,52,436,1,0,0,0,54,441,
1,0,0,0,56,451,1,0,0,0,58,455,1,0,0,0,60,457,1,0,0,0,62,468,1,0,0,0,64,470,
1,0,0,0,66,478,1,0,0,0,68,480,1,0,0,0,70,482,1,0,0,0,72,486,1,0,0,0,74,488,
1,0,0,0,76,490,1,0,0,0,78,492,1,0,0,0,80,494,1,0,0,0,82,498,1,0,0,0,84,507,
1,0,0,0,86,511,1,0,0,0,88,517,1,0,0,0,90,519,1,0,0,0,92,530,1,0,0,0,94,536,
1,0,0,0,96,538,1,0,0,0,98,540,1,0,0,0,100,544,1,0,0,0,102,547,1,0,0,0,104,
553,1,0,0,0,106,555,1,0,0,0,108,569,1,0,0,0,110,571,1,0,0,0,112,575,1,0,
0,0,114,579,1,0,0,0,116,581,1,0,0,0,118,584,1,0,0,0,120,589,1,0,0,0,122,
591,1,0,0,0,124,594,1,0,0,0,126,596,1,0,0,0,128,599,1,0,0,0,130,133,3,4,
2,0,131,133,3,2,1,0,132,130,1,0,0,0,132,131,1,0,0,0,133,136,1,0,0,0,134,
132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,134,1,0,0,0,137,138,5,0,
0,1,138,1,1,0,0,0,139,140,5,62,0,0,140,141,6,1,-1,0,141,3,1,0,0,0,142,144,
5,26,0,0,143,145,3,6,3,0,144,143,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,
146,147,3,8,4,0,147,148,3,10,5,0,148,149,5,30,0,0,149,153,3,12,6,0,150,151,
5,23,0,0,151,152,5,5,0,0,152,154,3,14,7,0,153,150,1,0,0,0,153,154,1,0,0,
0,154,157,1,0,0,0,155,156,5,31,0,0,156,158,3,38,19,0,157,155,1,0,0,0,157,
158,1,0,0,0,158,162,1,0,0,0,159,160,5,6,0,0,160,161,5,5,0,0,161,163,3,18,
9,0,162,159,1,0,0,0,162,163,1,0,0,0,163,166,1,0,0,0,164,165,5,7,0,0,165,
167,3,20,10,0,166,164,1,0,0,0,166,167,1,0,0,0,167,5,1,0,0,0,168,175,5,1,
0,0,169,175,5,3,0,0,170,175,5,15,0,0,171,175,5,17,0,0,172,175,5,19,0,0,173,
175,5,28,0,0,174,168,1,0,0,0,174,169,1,0,0,0,174,170,1,0,0,0,174,171,1,0,
0,0,174,172,1,0,0,0,174,173,1,0,0,0,175,7,1,0,0,0,176,187,5,35,0,0,177,187,
5,20,0,0,178,183,3,54,27,0,179,180,5,45,0,0,180,182,3,54,27,0,181,179,1,
0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,187,1,0,0,0,185,
183,1,0,0,0,186,176,1,0,0,0,186,177,1,0,0,0,186,178,1,0,0,0,187,9,1,0,0,
0,188,189,5,12,0,0,189,194,3,62,31,0,190,191,5,45,0,0,191,193,3,62,31,0,
192,190,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,198,
1,0,0,0,196,194,1,0,0,0,197,188,1,0,0,0,197,198,1,0,0,0,198,11,1,0,0,0,199,
200,6,6,-1,0,200,201,5,47,0,0,201,202,3,12,6,0,202,203,5,48,0,0,203,211,
1,0,0,0,204,211,3,56,28,0,205,206,7,0,0,0,206,207,5,47,0,0,207,208,3,60,
30,0,208,209,5,48,0,0,209,211,1,0,0,0,210,199,1,0,0,0,210,204,1,0,0,0,210,
205,1,0,0,0,211,233,1,0,0,0,212,213,10,4,0,0,213,214,5,43,0,0,214,232,3,
12,6,5,215,216,10,3,0,0,216,217,5,44,0,0,217,232,3,12,6,4,218,219,10,2,0,
0,219,220,5,22,0,0,220,232,3,12,6,3,221,222,10,7,0,0,222,223,5,4,0,0,223,
232,3,58,29,0,224,225,10,6,0,0,225,232,5,33,0,0,226,227,10,5,0,0,227,232,
5,53,0,0,228,229,10,1,0,0,229,230,5,11,0,0,230,232,3,22,11,0,231,212,1,0,
0,0,231,215,1,0,0,0,231,218,1,0,0,0,231,221,1,0,0,0,231,224,1,0,0,0,231,
226,1,0,0,0,231,228,1,0,0,0,232,235,1,0,0,0,233,231,1,0,0,0,233,234,1,0,
0,0,234,13,1,0,0,0,235,233,1,0,0,0,236,237,5,49,0,0,237,238,3,16,8,0,238,
244,5,50,0,0,239,240,5,45,0,0,240,241,5,49,0,0,241,242,3,16,8,0,242,243,
5,50,0,0,243,245,1,0,0,0,244,239,1,0,0,0,244,245,1,0,0,0,245,15,1,0,0,0,
246,251,3,66,33,0,247,248,5,45,0,0,248,250,3,66,33,0,249,247,1,0,0,0,250,
253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,17,1,0,0,0,253,251,1,0,0,
0,254,258,5,3,0,0,255,258,5,23,0,0,256,258,5,20,0,0,257,254,1,0,0,0,257,
255,1,0,0,0,257,256,1,0,0,0,258,19,1,0,0,0,259,260,3,68,34,0,260,21,1,0,
0,0,261,262,6,11,-1,0,262,263,5,47,0,0,263,264,3,22,11,0,264,265,5,48,0,
0,265,272,1,0,0,0,266,267,3,56,28,0,267,268,5,49,0,0,268,269,3,24,12,0,269,
270,5,50,0,0,270,272,1,0,0,0,271,261,1,0,0,0,271,266,1,0,0,0,272,281,1,0,
0,0,273,274,10,2,0,0,274,275,5,2,0,0,275,280,3,22,11,3,276,277,10,1,0,0,
277,278,5,22,0,0,278,280,3,22,11,2,279,273,1,0,0,0,279,276,1,0,0,0,280,283,
1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,23,1,0,0,0,283,281,1,0,0,0,284,
285,6,12,-1,0,285,286,5,47,0,0,286,287,3,24,12,0,287,288,5,48,0,0,288,321,
1,0,0,0,289,290,5,21,0,0,290,321,3,24,12,8,291,292,3,30,15,0,292,293,7,1,
0,0,293,294,3,30,15,0,294,321,1,0,0,0,295,296,3,26,13,0,296,297,7,2,0,0,
297,298,3,28,14,0,298,321,1,0,0,0,299,300,3,66,33,0,300,301,5,16,0,0,301,
302,3,80,40,0,302,321,1,0,0,0,303,307,3,66,33,0,304,308,5,14,0,0,305,306,
5,21,0,0,306,308,5,14,0,0,307,304,1,0,0,0,307,305,1,0,0,0,308,309,1,0,0,
0,309,310,3,32,16,0,310,321,1,0,0,0,311,312,3,30,15,0,312,313,5,14,0,0,313,
314,5,24,0,0,314,315,5,47,0,0,315,316,3,30,15,0,316,317,5,45,0,0,317,318,
3,30,15,0,318,319,5,48,0,0,319,321,1,0,0,0,320,284,1,0,0,0,320,289,1,0,0,
0,320,291,1,0,0,0,320,295,1,0,0,0,320,299,1,0,0,0,320,303,1,0,0,0,320,311,
1,0,0,0,321,330,1,0,0,0,322,323,10,5,0,0,323,324,5,2,0,0,324,329,3,24,12,
6,325,326,10,4,0,0,326,327,5,22,0,0,327,329,3,24,12,5,328,322,1,0,0,0,328,
325,1,0,0,0,329,332,1,0,0,0,330,328,1,0,0,0,330,331,1,0,0,0,331,25,1,0,0,
0,332,330,1,0,0,0,333,336,3,74,37,0,334,336,3,66,33,0,335,333,1,0,0,0,335,
334,1,0,0,0,336,27,1,0,0,0,337,341,3,74,37,0,338,341,3,66,33,0,339,341,3,
80,40,0,340,337,1,0,0,0,340,338,1,0,0,0,340,339,1,0,0,0,341,29,1,0,0,0,342,
343,6,15,-1,0,343,344,5,47,0,0,344,345,3,30,15,0,345,346,5,48,0,0,346,352,
1,0,0,0,347,352,3,72,36,0,348,352,3,66,33,0,349,350,7,3,0,0,350,352,3,30,
15,3,351,342,1,0,0,0,351,347,1,0,0,0,351,348,1,0,0,0,351,349,1,0,0,0,352,
361,1,0,0,0,353,354,10,2,0,0,354,355,7,4,0,0,355,360,3,30,15,3,356,357,10,
1,0,0,357,358,7,3,0,0,358,360,3,30,15,2,359,353,1,0,0,0,359,356,1,0,0,0,
360,363,1,0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,31,1,0,0,0,363,361,1,
0,0,0,364,365,5,51,0,0,365,366,3,34,17,0,366,367,5,52,0,0,367,373,1,0,0,
0,368,369,5,51,0,0,369,370,3,36,18,0,370,371,5,52,0,0,371,373,1,0,0,0,372,
364,1,0,0,0,372,368,1,0,0,0,373,33,1,0,0,0,374,379,3,72,36,0,375,376,5,45,
0,0,376,378,3,72,36,0,377,375,1,0,0,0,378,381,1,0,0,0,379,377,1,0,0,0,379,
380,1,0,0,0,380,396,1,0,0,0,381,379,1,0,0,0,382,383,3,68,34,0,383,384,5,
46,0,0,384,385,3,68,34,0,385,396,1,0,0,0,386,387,3,70,35,0,387,388,5,46,
0,0,388,389,3,70,35,0,389,396,1,0,0,0,390,391,3,72,36,0,391,392,5,46,0,0,
392,396,1,0,0,0,393,394,5,46,0,0,394,396,3,72,36,0,395,374,1,0,0,0,395,382,
1,0,0,0,395,386,1,0,0,0,395,390,1,0,0,0,395,393,1,0,0,0,396,35,1,0,0,0,397,
402,3,74,37,0,398,399,5,45,0,0,399,401,3,74,37,0,400,398,1,0,0,0,401,404,
1,0,0,0,402,400,1,0,0,0,402,403,1,0,0,0,403,37,1,0,0,0,404,402,1,0,0,0,405,
409,3,40,20,0,406,409,3,42,21,0,407,409,3,50,25,0,408,405,1,0,0,0,408,406,
1,0,0,0,408,407,1,0,0,0,409,39,1,0,0,0,410,411,3,68,34,0,411,412,5,10,0,
0,412,41,1,0,0,0,413,415,3,44,22,0,414,413,1,0,0,0,414,415,1,0,0,0,415,417,
1,0,0,0,416,418,3,46,23,0,417,416,1,0,0,0,417,418,1,0,0,0,418,420,1,0,0,
0,419,421,3,48,24,0,420,419,1,0,0,0,420,421,1,0,0,0,421,43,1,0,0,0,422,423,
3,72,36,0,423,424,5,13,0,0,424,45,1,0,0,0,425,426,3,72,36,0,426,427,5,18,
0,0,427,47,1,0,0,0,428,429,3,72,36,0,429,430,5,25,0,0,430,49,1,0,0,0,431,
432,3,68,34,0,432,433,5,49,0,0,433,434,3,76,38,0,434,435,5,50,0,0,435,51,
1,0,0,0,436,439,3,56,28,0,437,438,5,4,0,0,438,440,3,58,29,0,439,437,1,0,
0,0,439,440,1,0,0,0,440,53,1,0,0,0,441,446,3,56,28,0,442,443,5,49,0,0,443,
444,3,64,32,0,444,445,5,50,0,0,445,447,1,0,0,0,446,442,1,0,0,0,446,447,1,
0,0,0,447,55,1,0,0,0,448,449,3,62,31,0,449,450,5,39,0,0,450,452,1,0,0,0,
451,448,1,0,0,0,451,452,1,0,0,0,452,453,1,0,0,0,453,454,3,58,29,0,454,57,
1,0,0,0,455,456,3,76,38,0,456,59,1,0,0,0,457,458,6,30,-1,0,458,459,3,56,
28,0,459,465,1,0,0,0,460,461,10,1,0,0,461,462,5,11,0,0,462,464,3,22,11,0,
463,460,1,0,0,0,464,467,1,0,0,0,465,463,1,0,0,0,465,466,1,0,0,0,466,61,1,
0,0,0,467,465,1,0,0,0,468,469,3,76,38,0,469,63,1,0,0,0,470,475,3,66,33,0,
471,472,5,45,0,0,472,474,3,66,33,0,473,471,1,0,0,0,474,477,1,0,0,0,475,473,
1,0,0,0,475,476,1,0,0,0,476,65,1,0,0,0,477,475,1,0,0,0,478,479,3,76,38,0,
479,67,1,0,0,0,480,481,5,56,0,0,481,69,1,0,0,0,482,483,5,55,0,0,483,71,1,
0,0,0,484,487,3,68,34,0,485,487,3,70,35,0,486,484,1,0,0,0,486,485,1,0,0,
0,487,73,1,0,0,0,488,489,5,58,0,0,489,75,1,0,0,0,490,491,5,54,0,0,491,77,
1,0,0,0,492,493,7,5,0,0,493,79,1,0,0,0,494,495,5,63,0,0,495,496,3,82,41,
0,496,497,5,64,0,0,497,81,1,0,0,0,498,503,3,84,42,0,499,500,5,66,0,0,500,
502,3,84,42,0,501,499,1,0,0,0,502,505,1,0,0,0,503,501,1,0,0,0,503,504,1,
0,0,0,504,83,1,0,0,0,505,503,1,0,0,0,506,508,3,86,43,0,507,506,1,0,0,0,508,
509,1,0,0,0,509,507,1,0,0,0,509,510,1,0,0,0,510,85,1,0,0,0,511,513,3,88,
44,0,512,514,3,92,46,0,513,512,1,0,0,0,513,514,1,0,0,0,514,87,1,0,0,0,515,
518,3,90,45,0,516,518,3,104,52,0,517,515,1,0,0,0,517,516,1,0,0,0,518,89,
1,0,0,0,519,520,5,70,0,0,520,521,3,82,41,0,521,522,5,71,0,0,522,91,1,0,0,
0,523,531,5,73,0,0,524,531,5,74,0,0,525,531,5,75,0,0,526,527,5,68,0,0,527,
528,3,94,47,0,528,529,5,69,0,0,529,531,1,0,0,0,530,523,1,0,0,0,530,524,1,
0,0,0,530,525,1,0,0,0,530,526,1,0,0,0,531,93,1,0,0,0,532,537,3,96,48,0,533,
537,3,98,49,0,534,537,3,100,50,0,535,537,3,102,51,0,536,532,1,0,0,0,536,
533,1,0,0,0,536,534,1,0,0,0,536,535,1,0,0,0,537,95,1,0,0,0,538,539,3,128,
64,0,539,97,1,0,0,0,540,541,3,128,64,0,541,542,5,72,0,0,542,543,3,128,64,
0,543,99,1,0,0,0,544,545,3,128,64,0,545,546,5,72,0,0,546,101,1,0,0,0,547,
548,5,72,0,0,548,549,3,128,64,0,549,103,1,0,0,0,550,554,3,106,53,0,551,554,
3,126,63,0,552,554,3,120,60,0,553,550,1,0,0,0,553,551,1,0,0,0,553,552,1,
0,0,0,554,105,1,0,0,0,555,557,5,78,0,0,556,558,5,76,0,0,557,556,1,0,0,0,
557,558,1,0,0,0,558,560,1,0,0,0,559,561,3,108,54,0,560,559,1,0,0,0,561,562,
1,0,0,0,562,560,1,0,0,0,562,563,1,0,0,0,563,564,1,0,0,0,564,565,5,79,0,0,
565,107,1,0,0,0,566,570,3,110,55,0,567,570,3,126,63,0,568,570,3,112,56,0,
569,566,1,0,0,0,569,567,1,0,0,0,569,568,1,0,0,0,570,109,1,0,0,0,571,572,
3,114,57,0,572,573,5,77,0,0,573,574,3,114,57,0,574,111,1,0,0,0,575,576,3,
114,57,0,576,113,1,0,0,0,577,580,3,116,58,0,578,580,3,118,59,0,579,577,1,
0,0,0,579,578,1,0,0,0,580,115,1,0,0,0,581,582,5,80,0,0,582,583,7,6,0,0,583,
117,1,0,0,0,584,585,8,6,0,0,585,119,1,0,0,0,586,590,3,122,61,0,587,590,5,
82,0,0,588,590,3,124,62,0,589,586,1,0,0,0,589,587,1,0,0,0,589,588,1,0,0,
0,590,121,1,0,0,0,591,592,5,80,0,0,592,593,7,7,0,0,593,123,1,0,0,0,594,595,
8,8,0,0,595,125,1,0,0,0,596,597,7,9,0,0,597,127,1,0,0,0,598,600,5,91,0,0,
599,598,1,0,0,0,600,601,1,0,0,0,601,599,1,0,0,0,601,602,1,0,0,0,602,129,
1,0,0,0,57,132,134,144,153,157,162,166,174,183,186,194,197,210,231,233,244,
251,257,271,279,281,307,320,328,330,335,340,351,359,361,372,379,395,402,
408,414,417,420,439,446,451,465,475,486,503,509,513,517,530,536,553,557,
562,569,579,589,601];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CEQLQueryParser extends antlr4.Parser {

    static grammarFileName = "CEQLQueryParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'%'", null, null, null, "'/'", "'<'", "'<='", 
                            "'>'", "'>='", null, null, "';'", "':'", null, 
                            null, null, null, null, null, null, null, "':+'", 
                            null, null, null, null, null, null, null, null, 
                            null, "'<<'", "'>>'", "'\\>'", "'|'", "'!'", 
                            null, null, null, null, null, "'?'", null, null, 
                            "'^'", null, null, null, "'\\'", null, "'.'", 
                            null, null, "'\\d'", "'\\D'", "'\\s'", "'\\S'", 
                            "'\\w'", "'\\W'" ];
    static symbolicNames = [ null, "K_ALL", "K_AND", "K_ANY", "K_AS", "K_BY", 
                             "K_CONSUME", "K_LIMIT", "K_DISTINCT", "K_EVENT", 
                             "K_EVENTS", "K_FILTER", "K_FROM", "K_HOURS", 
                             "K_IN", "K_LAST", "K_LIKE", "K_MAX", "K_MINUTES", 
                             "K_NEXT", "K_NONE", "K_NOT", "K_OR", "K_PARTITION", 
                             "K_RANGE", "K_SECONDS", "K_SELECT", "K_STREAM", 
                             "K_STRICT", "K_UNLESS", "K_WHERE", "K_WITHIN", 
                             "PERCENT", "PLUS", "MINUS", "STAR", "SLASH", 
                             "LE", "LEQ", "GE", "GEQ", "EQ", "NEQ", "SEMICOLON", 
                             "COLON", "COMMA", "DOUBLE_DOT", "LEFT_PARENTHESIS", 
                             "RIGHT_PARENTHESIS", "LEFT_SQUARE_BRACKET", 
                             "RIGHT_SQUARE_BRACKET", "LEFT_CURLY_BRACKET", 
                             "RIGHT_CURLY_BRACKET", "COLON_PLUS", "IDENTIFIER", 
                             "DOUBLE_LITERAL", "INTEGER_LITERAL", "NUMERICAL_EXPONENT", 
                             "STRING_LITERAL", "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT", 
                             "SPACES", "UNEXPECTED_CHAR", "REGEX_START", 
                             "REGEX_END", "REGEX_END_ESCAPED", "REGEX_PIPE", 
                             "REGEX_EXCLAMAITON", "REGEX_L_CURLY", "REGEX_R_CURLY", 
                             "REGEX_L_PAR", "REGEX_R_PAR", "REGEX_COMMA", 
                             "REGEX_QUESTION", "REGEX_PLUS", "REGEX_STAR", 
                             "REGEX_HAT", "REGEX_HYPHEN", "REGEX_L_BRACK", 
                             "REGEX_R_BRACK", "REGEX_BACKSLASH", "REGEX_ALPHA", 
                             "REGEX_DOT", "REGEX_DOUBLED_DOT", "UNRECOGNIZED", 
                             "REGEX_DECIMAL_DIGIT", "REGEX_NOT_DECIMAL_DIGIT", 
                             "REGEX_WHITESPACE", "REGEX_NOT_WHITESPACE", 
                             "REGEX_ALPHANUMERIC", "REGEX_NOT_ALPHANUMERIC", 
                             "REGEX_DIGIT" ];
    static ruleNames = [ "parse", "error", "core_query", "selection_strategy", 
                         "list_of_variables", "from_clause", "cel_formula", 
                         "partition_list", "attribute_list", "consumption_policy", 
                         "limit", "filter", "predicate", "string_literal", 
                         "string_literal_or_regexp", "math_expr", "value_seq", 
                         "number_seq", "string_seq", "time_window", "event_span", 
                         "time_span", "hour_span", "minute_span", "second_span", 
                         "custom_span", "named_event", "s_event_name_with_projection", 
                         "s_event_name", "event_name", "atomic_cel_formula", 
                         "stream_name", "list_of_attribute_names", "attribute_name", 
                         "integer", "double", "number", "string", "any_name", 
                         "keyword", "regexp", "regexp_alternation", "regexp_exp", 
                         "regexp_element", "regexp_group", "parenthesis", 
                         "quantifier", "quantity", "quantExact", "quantRange", 
                         "quantMin", "quantMax", "atom", "characterClass", 
                         "ccAtom", "ccRange", "ccSingle", "ccLiteral", "ccEscapes", 
                         "ccOther", "literal", "escapes", "other", "sharedAtom", 
                         "regexp_number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CEQLQueryParser.ruleNames;
        this.literalNames = CEQLQueryParser.literalNames;
        this.symbolicNames = CEQLQueryParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.cel_formula_sempred(localctx, predIndex);
    	case 11:
    	    		return this.filter_sempred(localctx, predIndex);
    	case 12:
    	    		return this.predicate_sempred(localctx, predIndex);
    	case 15:
    	    		return this.math_expr_sempred(localctx, predIndex);
    	case 30:
    	    		return this.atomic_cel_formula_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    cel_formula_sempred(localctx, predIndex) {
    	switch(predIndex) {
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
    			throw "No predicate with index:" + predIndex;
    	}
    };

    filter_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 7:
    			return this.precpred(this._ctx, 2);
    		case 8:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    predicate_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 9:
    			return this.precpred(this._ctx, 5);
    		case 10:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    math_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 11:
    			return this.precpred(this._ctx, 2);
    		case 12:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    atomic_cel_formula_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 13:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	parse() {
	    let localctx = new ParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CEQLQueryParser.RULE_parse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26 || _la===62) {
	            this.state = 132;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 26:
	                this.state = 130;
	                this.core_query();
	                break;
	            case 62:
	                this.state = 131;
	                this.error();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this.match(CEQLQueryParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 139;
	        localctx._UNEXPECTED_CHAR = this.match(CEQLQueryParser.UNEXPECTED_CHAR);

	             throw new RuntimeException("UNEXPECTED_CHAR=" + (localctx._UNEXPECTED_CHAR == null ? null : localctx._UNEXPECTED_CHAR.text));
	           
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 142;
	        this.match(CEQLQueryParser.K_SELECT);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 269123594) !== 0)) {
	            this.state = 143;
	            this.selection_strategy();
	        }

	        this.state = 146;
	        this.list_of_variables();
	        this.state = 147;
	        this.from_clause();
	        this.state = 148;
	        this.match(CEQLQueryParser.K_WHERE);
	        this.state = 149;
	        this.cel_formula(0);
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 150;
	            this.match(CEQLQueryParser.K_PARTITION);
	            this.state = 151;
	            this.match(CEQLQueryParser.K_BY);
	            this.state = 152;
	            this.partition_list();
	        }

	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 155;
	            this.match(CEQLQueryParser.K_WITHIN);
	            this.state = 156;
	            this.time_window();
	        }

	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 159;
	            this.match(CEQLQueryParser.K_CONSUME);
	            this.state = 160;
	            this.match(CEQLQueryParser.K_BY);
	            this.state = 161;
	            this.consumption_policy();
	        }

	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 164;
	            this.match(CEQLQueryParser.K_LIMIT);
	            this.state = 165;
	            this.limit();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 174;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new Ss_allContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 168;
	            this.match(CEQLQueryParser.K_ALL);
	            break;
	        case 3:
	            localctx = new Ss_anyContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            this.match(CEQLQueryParser.K_ANY);
	            break;
	        case 15:
	            localctx = new Ss_lastContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 170;
	            this.match(CEQLQueryParser.K_LAST);
	            break;
	        case 17:
	            localctx = new Ss_maxContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 171;
	            this.match(CEQLQueryParser.K_MAX);
	            break;
	        case 19:
	            localctx = new Ss_nextContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 172;
	            this.match(CEQLQueryParser.K_NEXT);
	            break;
	        case 28:
	            localctx = new Ss_strictContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 173;
	            this.match(CEQLQueryParser.K_STRICT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 186;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            localctx = new S_starContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.match(CEQLQueryParser.STAR);
	            break;
	        case 20:
	            localctx = new S_noneContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.match(CEQLQueryParser.K_NONE);
	            break;
	        case 54:
	            localctx = new S_event_name_with_projection_listContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 178;
	            this.s_event_name_with_projection();
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===45) {
	                this.state = 179;
	                this.match(CEQLQueryParser.COMMA);
	                this.state = 180;
	                this.s_event_name_with_projection();
	                this.state = 185;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 188;
	            this.match(CEQLQueryParser.K_FROM);
	            this.state = 189;
	            this.stream_name();
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===45) {
	                this.state = 190;
	                this.match(CEQLQueryParser.COMMA);
	                this.state = 191;
	                this.stream_name();
	                this.state = 196;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Cel_formulaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, CEQLQueryParser.RULE_cel_formula, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 47:
	            localctx = new Par_cel_formulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 200;
	            this.match(CEQLQueryParser.LEFT_PARENTHESIS);
	            this.state = 201;
	            this.cel_formula(0);
	            this.state = 202;
	            this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
	            break;
	        case 54:
	            localctx = new Event_type_cel_formulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 204;
	            this.s_event_name();
	            break;
	        case 21:
	        case 67:
	            localctx = new Not_event_type_atomic_cel_formulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 205;
	            _la = this._input.LA(1);
	            if(!(_la===21 || _la===67)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 206;
	            this.match(CEQLQueryParser.LEFT_PARENTHESIS);
	            this.state = 207;
	            this.atomic_cel_formula(0);
	            this.state = 208;
	            this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 233;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 231;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Non_contiguous_sequencing_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
	                    this.state = 212;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 213;
	                    this.match(CEQLQueryParser.SEMICOLON);
	                    this.state = 214;
	                    this.cel_formula(5);
	                    break;

	                case 2:
	                    localctx = new Contiguous_sequencing_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
	                    this.state = 215;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 216;
	                    this.match(CEQLQueryParser.COLON);
	                    this.state = 217;
	                    this.cel_formula(4);
	                    break;

	                case 3:
	                    localctx = new Or_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
	                    this.state = 218;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 219;
	                    this.match(CEQLQueryParser.K_OR);
	                    this.state = 220;
	                    this.cel_formula(3);
	                    break;

	                case 4:
	                    localctx = new As_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 222;
	                    this.match(CEQLQueryParser.K_AS);
	                    this.state = 223;
	                    this.event_name();
	                    break;

	                case 5:
	                    localctx = new Non_contiguous_iteration_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
	                    this.state = 224;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 225;
	                    this.match(CEQLQueryParser.PLUS);
	                    break;

	                case 6:
	                    localctx = new Contiguous_iteration_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
	                    this.state = 226;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 227;
	                    this.match(CEQLQueryParser.COLON_PLUS);
	                    break;

	                case 7:
	                    localctx = new Filter_cel_formulaContext(this, new Cel_formulaContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_cel_formula);
	                    this.state = 228;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 229;
	                    this.match(CEQLQueryParser.K_FILTER);
	                    this.state = 230;
	                    this.filter(0);
	                    break;

	                } 
	            }
	            this.state = 235;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	partition_list() {
	    let localctx = new Partition_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CEQLQueryParser.RULE_partition_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
	        this.state = 237;
	        this.attribute_list();
	        this.state = 238;
	        this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 239;
	            this.match(CEQLQueryParser.COMMA);
	            this.state = 240;
	            this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
	            this.state = 241;
	            this.attribute_list();
	            this.state = 242;
	            this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 246;
	        this.attribute_name();
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===45) {
	            this.state = 247;
	            this.match(CEQLQueryParser.COMMA);
	            this.state = 248;
	            this.attribute_name();
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 257;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            localctx = new Cp_anyContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 254;
	            this.match(CEQLQueryParser.K_ANY);
	            break;
	        case 23:
	            localctx = new Cp_partitionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 255;
	            this.match(CEQLQueryParser.K_PARTITION);
	            break;
	        case 20:
	            localctx = new Cp_noneContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 256;
	            this.match(CEQLQueryParser.K_NONE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 259;
	        this.integer();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
		if(_p===undefined) {
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
	        this.state = 271;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 47:
	            localctx = new Par_filterContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 262;
	            this.match(CEQLQueryParser.LEFT_PARENTHESIS);
	            this.state = 263;
	            this.filter(0);
	            this.state = 264;
	            this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
	            break;
	        case 54:
	            localctx = new Atomic_filterContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 266;
	            this.s_event_name();
	            this.state = 267;
	            this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
	            this.state = 268;
	            this.predicate(0);
	            this.state = 269;
	            this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 281;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 279;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new And_filterContext(this, new FilterContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_filter);
	                    this.state = 273;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 274;
	                    this.match(CEQLQueryParser.K_AND);
	                    this.state = 275;
	                    this.filter(3);
	                    break;

	                case 2:
	                    localctx = new Or_filterContext(this, new FilterContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_filter);
	                    this.state = 276;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 277;
	                    this.match(CEQLQueryParser.K_OR);
	                    this.state = 278;
	                    this.filter(2);
	                    break;

	                } 
	            }
	            this.state = 283;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	predicate(_p) {
		if(_p===undefined) {
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
	        this.state = 320;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Par_predicateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 285;
	            this.match(CEQLQueryParser.LEFT_PARENTHESIS);
	            this.state = 286;
	            this.predicate(0);
	            this.state = 287;
	            this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
	            break;

	        case 2:
	            localctx = new Not_predicateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 289;
	            this.match(CEQLQueryParser.K_NOT);
	            this.state = 290;
	            this.predicate(8);
	            break;

	        case 3:
	            localctx = new Inequality_predicateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 291;
	            this.math_expr(0);
	            this.state = 292;
	            _la = this._input.LA(1);
	            if(!(((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 63) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 293;
	            this.math_expr(0);
	            break;

	        case 4:
	            localctx = new Equality_string_predicateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 295;
	            this.string_literal();
	            this.state = 296;
	            _la = this._input.LA(1);
	            if(!(_la===41 || _la===42)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 297;
	            this.string_literal_or_regexp();
	            break;

	        case 5:
	            localctx = new Regex_predicateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 299;
	            this.attribute_name();
	            this.state = 300;
	            this.match(CEQLQueryParser.K_LIKE);
	            this.state = 301;
	            this.regexp();
	            break;

	        case 6:
	            localctx = new In_predicateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 303;
	            this.attribute_name();
	            this.state = 307;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 14:
	                this.state = 304;
	                this.match(CEQLQueryParser.K_IN);
	                break;
	            case 21:
	                this.state = 305;
	                this.match(CEQLQueryParser.K_NOT);
	                this.state = 306;
	                this.match(CEQLQueryParser.K_IN);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 309;
	            this.value_seq();
	            break;

	        case 7:
	            localctx = new In_range_predicateContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 311;
	            this.math_expr(0);
	            this.state = 312;
	            this.match(CEQLQueryParser.K_IN);
	            this.state = 313;
	            this.match(CEQLQueryParser.K_RANGE);
	            this.state = 314;
	            this.match(CEQLQueryParser.LEFT_PARENTHESIS);
	            this.state = 315;
	            this.math_expr(0);
	            this.state = 316;
	            this.match(CEQLQueryParser.COMMA);
	            this.state = 317;
	            this.math_expr(0);
	            this.state = 318;
	            this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 330;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 328;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new And_predicateContext(this, new PredicateContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_predicate);
	                    this.state = 322;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 323;
	                    this.match(CEQLQueryParser.K_AND);
	                    this.state = 324;
	                    this.predicate(6);
	                    break;

	                case 2:
	                    localctx = new Or_predicateContext(this, new PredicateContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_predicate);
	                    this.state = 325;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 326;
	                    this.match(CEQLQueryParser.K_OR);
	                    this.state = 327;
	                    this.predicate(5);
	                    break;

	                } 
	            }
	            this.state = 332;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	string_literal() {
	    let localctx = new String_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CEQLQueryParser.RULE_string_literal);
	    try {
	        this.state = 335;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 333;
	            this.string();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 334;
	            this.attribute_name();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    let localctx = new String_literal_or_regexpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CEQLQueryParser.RULE_string_literal_or_regexp);
	    try {
	        this.state = 340;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 337;
	            this.string();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 338;
	            this.attribute_name();
	            break;
	        case 63:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 339;
	            this.regexp();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
		if(_p===undefined) {
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
	        this.state = 351;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 47:
	            localctx = new Par_math_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 343;
	            this.match(CEQLQueryParser.LEFT_PARENTHESIS);
	            this.state = 344;
	            this.math_expr(0);
	            this.state = 345;
	            this.match(CEQLQueryParser.RIGHT_PARENTHESIS);
	            break;
	        case 55:
	        case 56:
	            localctx = new Number_math_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 347;
	            this.number();
	            break;
	        case 54:
	            localctx = new Attribute_math_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 348;
	            this.attribute_name();
	            break;
	        case 33:
	        case 34:
	            localctx = new Unary_math_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 349;
	            _la = this._input.LA(1);
	            if(!(_la===33 || _la===34)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 350;
	            this.math_expr(3);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 361;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 359;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Mul_math_exprContext(this, new Math_exprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_math_expr);
	                    this.state = 353;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 354;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 25) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 355;
	                    this.math_expr(3);
	                    break;

	                case 2:
	                    localctx = new Sum_math_exprContext(this, new Math_exprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_math_expr);
	                    this.state = 356;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 357;
	                    _la = this._input.LA(1);
	                    if(!(_la===33 || _la===34)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 358;
	                    this.math_expr(2);
	                    break;

	                } 
	            }
	            this.state = 363;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	value_seq() {
	    let localctx = new Value_seqContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, CEQLQueryParser.RULE_value_seq);
	    try {
	        this.state = 372;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 364;
	            this.match(CEQLQueryParser.LEFT_CURLY_BRACKET);
	            this.state = 365;
	            this.number_seq();
	            this.state = 366;
	            this.match(CEQLQueryParser.RIGHT_CURLY_BRACKET);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 368;
	            this.match(CEQLQueryParser.LEFT_CURLY_BRACKET);
	            this.state = 369;
	            this.string_seq();
	            this.state = 370;
	            this.match(CEQLQueryParser.RIGHT_CURLY_BRACKET);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 395;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Number_listContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 374;
	            this.number();
	            this.state = 379;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===45) {
	                this.state = 375;
	                this.match(CEQLQueryParser.COMMA);
	                this.state = 376;
	                this.number();
	                this.state = 381;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            localctx = new Integer_rangeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 382;
	            this.integer();
	            this.state = 383;
	            this.match(CEQLQueryParser.DOUBLE_DOT);
	            this.state = 384;
	            this.integer();
	            break;

	        case 3:
	            localctx = new Double_rangeContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 386;
	            this.double_();
	            this.state = 387;
	            this.match(CEQLQueryParser.DOUBLE_DOT);
	            this.state = 388;
	            this.double_();
	            break;

	        case 4:
	            localctx = new Number_range_lowerContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 390;
	            this.number();
	            this.state = 391;
	            this.match(CEQLQueryParser.DOUBLE_DOT);
	            break;

	        case 5:
	            localctx = new Number_range_upperContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 393;
	            this.match(CEQLQueryParser.DOUBLE_DOT);
	            this.state = 394;
	            this.number();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 397;
	        this.string();
	        this.state = 402;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===45) {
	            this.state = 398;
	            this.match(CEQLQueryParser.COMMA);
	            this.state = 399;
	            this.string();
	            this.state = 404;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 408;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 405;
	            this.event_span();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 406;
	            this.time_span();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 407;
	            this.custom_span();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 410;
	        this.integer();
	        this.state = 411;
	        this.match(CEQLQueryParser.K_EVENTS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 414;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        if(la_===1) {
	            this.state = 413;
	            this.hour_span();

	        }
	        this.state = 417;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        if(la_===1) {
	            this.state = 416;
	            this.minute_span();

	        }
	        this.state = 420;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===55 || _la===56) {
	            this.state = 419;
	            this.second_span();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 422;
	        this.number();
	        this.state = 423;
	        this.match(CEQLQueryParser.K_HOURS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 425;
	        this.number();
	        this.state = 426;
	        this.match(CEQLQueryParser.K_MINUTES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 428;
	        this.number();
	        this.state = 429;
	        this.match(CEQLQueryParser.K_SECONDS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 431;
	        this.integer();
	        this.state = 432;
	        this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
	        this.state = 433;
	        this.any_name();
	        this.state = 434;
	        this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	        this.state = 436;
	        this.s_event_name();
	        this.state = 439;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 437;
	            this.match(CEQLQueryParser.K_AS);
	            this.state = 438;
	            this.event_name();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	s_event_name_with_projection() {
	    let localctx = new S_event_name_with_projectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, CEQLQueryParser.RULE_s_event_name_with_projection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 441;
	        this.s_event_name();
	        this.state = 446;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===49) {
	            this.state = 442;
	            this.match(CEQLQueryParser.LEFT_SQUARE_BRACKET);
	            this.state = 443;
	            this.list_of_attribute_names();
	            this.state = 444;
	            this.match(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 56, CEQLQueryParser.RULE_s_event_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        if(la_===1) {
	            this.state = 448;
	            this.stream_name();
	            this.state = 449;
	            this.match(CEQLQueryParser.GE);

	        }
	        this.state = 453;
	        this.event_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 58, CEQLQueryParser.RULE_event_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 455;
	        this.any_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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


	atomic_cel_formula(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Atomic_cel_formulaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 60;
	    this.enterRecursionRule(localctx, 60, CEQLQueryParser.RULE_atomic_cel_formula, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new Atomic_cel_formula_rContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 458;
	        this.s_event_name();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 465;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Atomic_cel_formula_filterContext(this, new Atomic_cel_formulaContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, CEQLQueryParser.RULE_atomic_cel_formula);
	                this.state = 460;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 461;
	                this.match(CEQLQueryParser.K_FILTER);
	                this.state = 462;
	                this.filter(0); 
	            }
	            this.state = 467;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	stream_name() {
	    let localctx = new Stream_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, CEQLQueryParser.RULE_stream_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.any_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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



	list_of_attribute_names() {
	    let localctx = new List_of_attribute_namesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, CEQLQueryParser.RULE_list_of_attribute_names);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 470;
	        this.attribute_name();
	        this.state = 475;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===45) {
	            this.state = 471;
	            this.match(CEQLQueryParser.COMMA);
	            this.state = 472;
	            this.attribute_name();
	            this.state = 477;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 66, CEQLQueryParser.RULE_attribute_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 478;
	        this.any_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 68, CEQLQueryParser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 480;
	        this.match(CEQLQueryParser.INTEGER_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 70, CEQLQueryParser.RULE_double);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 482;
	        this.match(CEQLQueryParser.DOUBLE_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 72, CEQLQueryParser.RULE_number);
	    try {
	        this.state = 486;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 56:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 484;
	            this.integer();
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 485;
	            this.double_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 74, CEQLQueryParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        this.match(CEQLQueryParser.STRING_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 76, CEQLQueryParser.RULE_any_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 490;
	        this.match(CEQLQueryParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 78, CEQLQueryParser.RULE_keyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 492;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967166) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 80, CEQLQueryParser.RULE_regexp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 494;
	        this.match(CEQLQueryParser.REGEX_START);
	        this.state = 495;
	        this.regexp_alternation();
	        this.state = 496;
	        this.match(CEQLQueryParser.REGEX_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 82, CEQLQueryParser.RULE_regexp_alternation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 498;
	        this.regexp_exp();
	        this.state = 503;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===66) {
	            this.state = 499;
	            this.match(CEQLQueryParser.REGEX_PIPE);
	            this.state = 500;
	            this.regexp_exp();
	            this.state = 505;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 84, CEQLQueryParser.RULE_regexp_exp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 507; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 506;
	        		this.regexp_element();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 509; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,45, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 86, CEQLQueryParser.RULE_regexp_element);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 511;
	        this.regexp_group();
	        this.state = 513;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 225) !== 0)) {
	            this.state = 512;
	            this.quantifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 88, CEQLQueryParser.RULE_regexp_group);
	    try {
	        this.state = 517;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 70:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 515;
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
	            this.state = 516;
	            this.atom();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 90, CEQLQueryParser.RULE_parenthesis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 519;
	        this.match(CEQLQueryParser.REGEX_L_PAR);
	        this.state = 520;
	        this.regexp_alternation();
	        this.state = 521;
	        this.match(CEQLQueryParser.REGEX_R_PAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 92, CEQLQueryParser.RULE_quantifier);
	    try {
	        this.state = 530;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 73:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 523;
	            this.match(CEQLQueryParser.REGEX_QUESTION);
	            break;
	        case 74:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 524;
	            this.match(CEQLQueryParser.REGEX_PLUS);
	            break;
	        case 75:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 525;
	            this.match(CEQLQueryParser.REGEX_STAR);
	            break;
	        case 68:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 526;
	            this.match(CEQLQueryParser.REGEX_L_CURLY);
	            this.state = 527;
	            this.quantity();
	            this.state = 528;
	            this.match(CEQLQueryParser.REGEX_R_CURLY);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 94, CEQLQueryParser.RULE_quantity);
	    try {
	        this.state = 536;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 532;
	            this.quantExact();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 533;
	            this.quantRange();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 534;
	            this.quantMin();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 535;
	            this.quantMax();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 96, CEQLQueryParser.RULE_quantExact);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 538;
	        this.regexp_number();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 98, CEQLQueryParser.RULE_quantRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 540;
	        this.regexp_number();
	        this.state = 541;
	        this.match(CEQLQueryParser.REGEX_COMMA);
	        this.state = 542;
	        this.regexp_number();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 100, CEQLQueryParser.RULE_quantMin);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        this.regexp_number();
	        this.state = 545;
	        this.match(CEQLQueryParser.REGEX_COMMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 102, CEQLQueryParser.RULE_quantMax);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 547;
	        this.match(CEQLQueryParser.REGEX_COMMA);
	        this.state = 548;
	        this.regexp_number();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 104, CEQLQueryParser.RULE_atom);
	    try {
	        this.state = 553;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 550;
	            this.characterClass();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 551;
	            this.sharedAtom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 552;
	            this.literal();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 106, CEQLQueryParser.RULE_characterClass);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 555;
	        this.match(CEQLQueryParser.REGEX_L_BRACK);
	        this.state = 557;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===76) {
	            this.state = 556;
	            this.match(CEQLQueryParser.REGEX_HAT);
	        }

	        this.state = 560; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 559;
	            this.ccAtom();
	            this.state = 562; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 268390399) !== 0));
	        this.state = 564;
	        this.match(CEQLQueryParser.REGEX_R_BRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 108, CEQLQueryParser.RULE_ccAtom);
	    try {
	        this.state = 569;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 566;
	            this.ccRange();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 567;
	            this.sharedAtom();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 568;
	            this.ccSingle();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 110, CEQLQueryParser.RULE_ccRange);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 571;
	        this.ccLiteral();
	        this.state = 572;
	        this.match(CEQLQueryParser.REGEX_HYPHEN);
	        this.state = 573;
	        this.ccLiteral();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 112, CEQLQueryParser.RULE_ccSingle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 575;
	        this.ccLiteral();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 114, CEQLQueryParser.RULE_ccLiteral);
	    try {
	        this.state = 579;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 80:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 577;
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
	            this.state = 578;
	            this.ccOther();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 116, CEQLQueryParser.RULE_ccEscapes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 581;
	        this.match(CEQLQueryParser.REGEX_BACKSLASH);
	        this.state = 582;
	        _la = this._input.LA(1);
	        if(!(((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 27) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 118, CEQLQueryParser.RULE_ccOther);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 584;
	        _la = this._input.LA(1);
	        if(_la<=0 || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 27) !== 0)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 120, CEQLQueryParser.RULE_literal);
	    try {
	        this.state = 589;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 586;
	            this.escapes();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 587;
	            this.match(CEQLQueryParser.REGEX_DOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 588;
	            this.other();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 122, CEQLQueryParser.RULE_escapes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 591;
	        this.match(CEQLQueryParser.REGEX_BACKSLASH);
	        this.state = 592;
	        _la = this._input.LA(1);
	        if(!(((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 95165) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 124, CEQLQueryParser.RULE_other);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 594;
	        _la = this._input.LA(1);
	        if(_la<=0 || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 29629) !== 0)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 126, CEQLQueryParser.RULE_sharedAtom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 596;
	        _la = this._input.LA(1);
	        if(!(((((_la - 85)) & ~0x1f) === 0 && ((1 << (_la - 85)) & 63) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	    this.enterRule(localctx, 128, CEQLQueryParser.RULE_regexp_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 599; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 598;
	            this.match(CEQLQueryParser.REGEX_DIGIT);
	            this.state = 601; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===91);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
CEQLQueryParser.RULE_s_event_name_with_projection = 27;
CEQLQueryParser.RULE_s_event_name = 28;
CEQLQueryParser.RULE_event_name = 29;
CEQLQueryParser.RULE_atomic_cel_formula = 30;
CEQLQueryParser.RULE_stream_name = 31;
CEQLQueryParser.RULE_list_of_attribute_names = 32;
CEQLQueryParser.RULE_attribute_name = 33;
CEQLQueryParser.RULE_integer = 34;
CEQLQueryParser.RULE_double = 35;
CEQLQueryParser.RULE_number = 36;
CEQLQueryParser.RULE_string = 37;
CEQLQueryParser.RULE_any_name = 38;
CEQLQueryParser.RULE_keyword = 39;
CEQLQueryParser.RULE_regexp = 40;
CEQLQueryParser.RULE_regexp_alternation = 41;
CEQLQueryParser.RULE_regexp_exp = 42;
CEQLQueryParser.RULE_regexp_element = 43;
CEQLQueryParser.RULE_regexp_group = 44;
CEQLQueryParser.RULE_parenthesis = 45;
CEQLQueryParser.RULE_quantifier = 46;
CEQLQueryParser.RULE_quantity = 47;
CEQLQueryParser.RULE_quantExact = 48;
CEQLQueryParser.RULE_quantRange = 49;
CEQLQueryParser.RULE_quantMin = 50;
CEQLQueryParser.RULE_quantMax = 51;
CEQLQueryParser.RULE_atom = 52;
CEQLQueryParser.RULE_characterClass = 53;
CEQLQueryParser.RULE_ccAtom = 54;
CEQLQueryParser.RULE_ccRange = 55;
CEQLQueryParser.RULE_ccSingle = 56;
CEQLQueryParser.RULE_ccLiteral = 57;
CEQLQueryParser.RULE_ccEscapes = 58;
CEQLQueryParser.RULE_ccOther = 59;
CEQLQueryParser.RULE_literal = 60;
CEQLQueryParser.RULE_escapes = 61;
CEQLQueryParser.RULE_other = 62;
CEQLQueryParser.RULE_sharedAtom = 63;
CEQLQueryParser.RULE_regexp_number = 64;

class ParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_parse;
    }

	EOF() {
	    return this.getToken(CEQLQueryParser.EOF, 0);
	};

	core_query = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Core_queryContext);
	    } else {
	        return this.getTypedRuleContext(Core_queryContext,i);
	    }
	};

	error = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ErrorContext);
	    } else {
	        return this.getTypedRuleContext(ErrorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitParse(this);
		}
	}


}



class ErrorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_error;
        this._UNEXPECTED_CHAR = null;
    }

	UNEXPECTED_CHAR() {
	    return this.getToken(CEQLQueryParser.UNEXPECTED_CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterError(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitError(this);
		}
	}


}



class Core_queryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_core_query;
    }

	K_SELECT() {
	    return this.getToken(CEQLQueryParser.K_SELECT, 0);
	};

	list_of_variables() {
	    return this.getTypedRuleContext(List_of_variablesContext,0);
	};

	from_clause() {
	    return this.getTypedRuleContext(From_clauseContext,0);
	};

	K_WHERE() {
	    return this.getToken(CEQLQueryParser.K_WHERE, 0);
	};

	cel_formula() {
	    return this.getTypedRuleContext(Cel_formulaContext,0);
	};

	selection_strategy() {
	    return this.getTypedRuleContext(Selection_strategyContext,0);
	};

	K_PARTITION() {
	    return this.getToken(CEQLQueryParser.K_PARTITION, 0);
	};

	K_BY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.K_BY);
	    } else {
	        return this.getToken(CEQLQueryParser.K_BY, i);
	    }
	};


	partition_list() {
	    return this.getTypedRuleContext(Partition_listContext,0);
	};

	K_WITHIN() {
	    return this.getToken(CEQLQueryParser.K_WITHIN, 0);
	};

	time_window() {
	    return this.getTypedRuleContext(Time_windowContext,0);
	};

	K_CONSUME() {
	    return this.getToken(CEQLQueryParser.K_CONSUME, 0);
	};

	consumption_policy() {
	    return this.getTypedRuleContext(Consumption_policyContext,0);
	};

	K_LIMIT() {
	    return this.getToken(CEQLQueryParser.K_LIMIT, 0);
	};

	limit() {
	    return this.getTypedRuleContext(LimitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCore_query(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCore_query(this);
		}
	}


}



class Selection_strategyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterSs_last(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterSs_strict(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterSs_any(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterSs_next(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterSs_max(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterSs_all(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitSs_all(this);
		}
	}


}

CEQLQueryParser.Ss_allContext = Ss_allContext;

class List_of_variablesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterS_star(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitS_star(this);
		}
	}


}

CEQLQueryParser.S_starContext = S_starContext;

class S_event_name_with_projection_listContext extends List_of_variablesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	s_event_name_with_projection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(S_event_name_with_projectionContext);
	    } else {
	        return this.getTypedRuleContext(S_event_name_with_projectionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.COMMA);
	    } else {
	        return this.getToken(CEQLQueryParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterS_event_name_with_projection_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitS_event_name_with_projection_list(this);
		}
	}


}

CEQLQueryParser.S_event_name_with_projection_listContext = S_event_name_with_projection_listContext;

class S_noneContext extends List_of_variablesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	K_NONE() {
	    return this.getToken(CEQLQueryParser.K_NONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterS_none(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitS_none(this);
		}
	}


}

CEQLQueryParser.S_noneContext = S_noneContext;

class From_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_from_clause;
    }

	K_FROM() {
	    return this.getToken(CEQLQueryParser.K_FROM, 0);
	};

	stream_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Stream_nameContext);
	    } else {
	        return this.getTypedRuleContext(Stream_nameContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.COMMA);
	    } else {
	        return this.getToken(CEQLQueryParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterFrom_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitFrom_clause(this);
		}
	}


}



class Cel_formulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
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

	cel_formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Cel_formulaContext);
	    } else {
	        return this.getTypedRuleContext(Cel_formulaContext,i);
	    }
	};

	COLON() {
	    return this.getToken(CEQLQueryParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterContiguous_sequencing_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitContiguous_sequencing_cel_formula(this);
		}
	}


}

CEQLQueryParser.Contiguous_sequencing_cel_formulaContext = Contiguous_sequencing_cel_formulaContext;

class Not_event_type_atomic_cel_formulaContext extends Cel_formulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
	};

	atomic_cel_formula() {
	    return this.getTypedRuleContext(Atomic_cel_formulaContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
	};

	K_NOT() {
	    return this.getToken(CEQLQueryParser.K_NOT, 0);
	};

	REGEX_EXCLAMAITON() {
	    return this.getToken(CEQLQueryParser.REGEX_EXCLAMAITON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNot_event_type_atomic_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitNot_event_type_atomic_cel_formula(this);
		}
	}


}

CEQLQueryParser.Not_event_type_atomic_cel_formulaContext = Not_event_type_atomic_cel_formulaContext;

class Event_type_cel_formulaContext extends Cel_formulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	s_event_name() {
	    return this.getTypedRuleContext(S_event_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterEvent_type_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(Cel_formulaContext,0);
	};

	COLON_PLUS() {
	    return this.getToken(CEQLQueryParser.COLON_PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterContiguous_iteration_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitContiguous_iteration_cel_formula(this);
		}
	}


}

CEQLQueryParser.Contiguous_iteration_cel_formulaContext = Contiguous_iteration_cel_formulaContext;

class Par_cel_formulaContext extends Cel_formulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
	};

	cel_formula() {
	    return this.getTypedRuleContext(Cel_formulaContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterPar_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(Cel_formulaContext,0);
	};

	K_FILTER() {
	    return this.getToken(CEQLQueryParser.K_FILTER, 0);
	};

	filter() {
	    return this.getTypedRuleContext(FilterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterFilter_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	cel_formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Cel_formulaContext);
	    } else {
	        return this.getTypedRuleContext(Cel_formulaContext,i);
	    }
	};

	K_OR() {
	    return this.getToken(CEQLQueryParser.K_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterOr_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(Cel_formulaContext,0);
	};

	K_AS() {
	    return this.getToken(CEQLQueryParser.K_AS, 0);
	};

	event_name() {
	    return this.getTypedRuleContext(Event_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAs_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	cel_formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Cel_formulaContext);
	    } else {
	        return this.getTypedRuleContext(Cel_formulaContext,i);
	    }
	};

	SEMICOLON() {
	    return this.getToken(CEQLQueryParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNon_contiguous_sequencing_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitNon_contiguous_sequencing_cel_formula(this);
		}
	}


}

CEQLQueryParser.Non_contiguous_sequencing_cel_formulaContext = Non_contiguous_sequencing_cel_formulaContext;

class Non_contiguous_iteration_cel_formulaContext extends Cel_formulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	cel_formula() {
	    return this.getTypedRuleContext(Cel_formulaContext,0);
	};

	PLUS() {
	    return this.getToken(CEQLQueryParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNon_contiguous_iteration_cel_formula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitNon_contiguous_iteration_cel_formula(this);
		}
	}


}

CEQLQueryParser.Non_contiguous_iteration_cel_formulaContext = Non_contiguous_iteration_cel_formulaContext;

class Partition_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_partition_list;
    }

	LEFT_SQUARE_BRACKET = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.LEFT_SQUARE_BRACKET);
	    } else {
	        return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, i);
	    }
	};


	attribute_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Attribute_listContext);
	    } else {
	        return this.getTypedRuleContext(Attribute_listContext,i);
	    }
	};

	RIGHT_SQUARE_BRACKET = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.RIGHT_SQUARE_BRACKET);
	    } else {
	        return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, i);
	    }
	};


	COMMA() {
	    return this.getToken(CEQLQueryParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterPartition_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitPartition_list(this);
		}
	}


}



class Attribute_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_attribute_list;
    }

	attribute_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Attribute_nameContext);
	    } else {
	        return this.getTypedRuleContext(Attribute_nameContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.COMMA);
	    } else {
	        return this.getToken(CEQLQueryParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAttribute_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitAttribute_list(this);
		}
	}


}



class Consumption_policyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCp_partition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCp_any(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCp_none(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCp_none(this);
		}
	}


}

CEQLQueryParser.Cp_noneContext = Cp_noneContext;

class LimitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
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
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterL_integer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitL_integer(this);
		}
	}


}

CEQLQueryParser.L_integerContext = L_integerContext;

class FilterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
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
	};

	filter() {
	    return this.getTypedRuleContext(FilterContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterPar_filter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	filter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilterContext);
	    } else {
	        return this.getTypedRuleContext(FilterContext,i);
	    }
	};

	K_AND() {
	    return this.getToken(CEQLQueryParser.K_AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAnd_filter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(S_event_nameContext,0);
	};

	LEFT_SQUARE_BRACKET() {
	    return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, 0);
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	RIGHT_SQUARE_BRACKET() {
	    return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAtomic_filter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	filter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilterContext);
	    } else {
	        return this.getTypedRuleContext(FilterContext,i);
	    }
	};

	K_OR() {
	    return this.getToken(CEQLQueryParser.K_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterOr_filter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitOr_filter(this);
		}
	}


}

CEQLQueryParser.Or_filterContext = Or_filterContext;

class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
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
	    return this.getTypedRuleContext(Attribute_nameContext,0);
	};

	K_LIKE() {
	    return this.getToken(CEQLQueryParser.K_LIKE, 0);
	};

	regexp() {
	    return this.getTypedRuleContext(RegexpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterRegex_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	math_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Math_exprContext);
	    } else {
	        return this.getTypedRuleContext(Math_exprContext,i);
	    }
	};

	K_IN() {
	    return this.getToken(CEQLQueryParser.K_IN, 0);
	};

	K_RANGE() {
	    return this.getToken(CEQLQueryParser.K_RANGE, 0);
	};

	LEFT_PARENTHESIS() {
	    return this.getToken(CEQLQueryParser.LEFT_PARENTHESIS, 0);
	};

	COMMA() {
	    return this.getToken(CEQLQueryParser.COMMA, 0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterIn_range_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(Attribute_nameContext,0);
	};

	value_seq() {
	    return this.getTypedRuleContext(Value_seqContext,0);
	};

	K_IN() {
	    return this.getToken(CEQLQueryParser.K_IN, 0);
	};

	K_NOT() {
	    return this.getToken(CEQLQueryParser.K_NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterIn_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNot_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterPar_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	predicate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PredicateContext);
	    } else {
	        return this.getTypedRuleContext(PredicateContext,i);
	    }
	};

	K_AND() {
	    return this.getToken(CEQLQueryParser.K_AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAnd_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	string_literal_or_regexp() {
	    return this.getTypedRuleContext(String_literal_or_regexpContext,0);
	};

	EQ() {
	    return this.getToken(CEQLQueryParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(CEQLQueryParser.NEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterEquality_string_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitEquality_string_predicate(this);
		}
	}


}

CEQLQueryParser.Equality_string_predicateContext = Equality_string_predicateContext;

class Inequality_predicateContext extends PredicateContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	math_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Math_exprContext);
	    } else {
	        return this.getTypedRuleContext(Math_exprContext,i);
	    }
	};

	LE() {
	    return this.getToken(CEQLQueryParser.LE, 0);
	};

	LEQ() {
	    return this.getToken(CEQLQueryParser.LEQ, 0);
	};

	GE() {
	    return this.getToken(CEQLQueryParser.GE, 0);
	};

	GEQ() {
	    return this.getToken(CEQLQueryParser.GEQ, 0);
	};

	EQ() {
	    return this.getToken(CEQLQueryParser.EQ, 0);
	};

	NEQ() {
	    return this.getToken(CEQLQueryParser.NEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterInequality_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	predicate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PredicateContext);
	    } else {
	        return this.getTypedRuleContext(PredicateContext,i);
	    }
	};

	K_OR() {
	    return this.getToken(CEQLQueryParser.K_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterOr_predicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitOr_predicate(this);
		}
	}


}

CEQLQueryParser.Or_predicateContext = Or_predicateContext;

class String_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_string_literal;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	attribute_name() {
	    return this.getTypedRuleContext(Attribute_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterString_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitString_literal(this);
		}
	}


}



class String_literal_or_regexpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_string_literal_or_regexp;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	attribute_name() {
	    return this.getTypedRuleContext(Attribute_nameContext,0);
	};

	regexp() {
	    return this.getTypedRuleContext(RegexpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterString_literal_or_regexp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitString_literal_or_regexp(this);
		}
	}


}



class Math_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
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

	math_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Math_exprContext);
	    } else {
	        return this.getTypedRuleContext(Math_exprContext,i);
	    }
	};

	STAR() {
	    return this.getToken(CEQLQueryParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(CEQLQueryParser.SLASH, 0);
	};

	PERCENT() {
	    return this.getToken(CEQLQueryParser.PERCENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterMul_math_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	math_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Math_exprContext);
	    } else {
	        return this.getTypedRuleContext(Math_exprContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(CEQLQueryParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CEQLQueryParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterSum_math_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNumber_math_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(Math_exprContext,0);
	};

	PLUS() {
	    return this.getToken(CEQLQueryParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CEQLQueryParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterUnary_math_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(Attribute_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAttribute_math_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	math_expr() {
	    return this.getTypedRuleContext(Math_exprContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(CEQLQueryParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterPar_math_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitPar_math_expr(this);
		}
	}


}

CEQLQueryParser.Par_math_exprContext = Par_math_exprContext;

class Value_seqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_value_seq;
    }

	LEFT_CURLY_BRACKET() {
	    return this.getToken(CEQLQueryParser.LEFT_CURLY_BRACKET, 0);
	};

	number_seq() {
	    return this.getTypedRuleContext(Number_seqContext,0);
	};

	RIGHT_CURLY_BRACKET() {
	    return this.getToken(CEQLQueryParser.RIGHT_CURLY_BRACKET, 0);
	};

	string_seq() {
	    return this.getTypedRuleContext(String_seqContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterValue_seq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitValue_seq(this);
		}
	}


}



class Number_seqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
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

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.COMMA);
	    } else {
	        return this.getToken(CEQLQueryParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNumber_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	double_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DoubleContext);
	    } else {
	        return this.getTypedRuleContext(DoubleContext,i);
	    }
	};

	DOUBLE_DOT() {
	    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterDouble_range(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	    return this.getTypedRuleContext(NumberContext,0);
	};

	DOUBLE_DOT() {
	    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNumber_range_lower(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNumber_range_upper(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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

	integer = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntegerContext);
	    } else {
	        return this.getTypedRuleContext(IntegerContext,i);
	    }
	};

	DOUBLE_DOT() {
	    return this.getToken(CEQLQueryParser.DOUBLE_DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterInteger_range(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitInteger_range(this);
		}
	}


}

CEQLQueryParser.Integer_rangeContext = Integer_rangeContext;

class String_seqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_string_seq;
    }

	string = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringContext);
	    } else {
	        return this.getTypedRuleContext(StringContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.COMMA);
	    } else {
	        return this.getToken(CEQLQueryParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterString_seq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitString_seq(this);
		}
	}


}



class Time_windowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_time_window;
    }

	event_span() {
	    return this.getTypedRuleContext(Event_spanContext,0);
	};

	time_span() {
	    return this.getTypedRuleContext(Time_spanContext,0);
	};

	custom_span() {
	    return this.getTypedRuleContext(Custom_spanContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterTime_window(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitTime_window(this);
		}
	}


}



class Event_spanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_event_span;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	K_EVENTS() {
	    return this.getToken(CEQLQueryParser.K_EVENTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterEvent_span(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitEvent_span(this);
		}
	}


}



class Time_spanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_time_span;
    }

	hour_span() {
	    return this.getTypedRuleContext(Hour_spanContext,0);
	};

	minute_span() {
	    return this.getTypedRuleContext(Minute_spanContext,0);
	};

	second_span() {
	    return this.getTypedRuleContext(Second_spanContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterTime_span(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitTime_span(this);
		}
	}


}



class Hour_spanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_hour_span;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	K_HOURS() {
	    return this.getToken(CEQLQueryParser.K_HOURS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterHour_span(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitHour_span(this);
		}
	}


}



class Minute_spanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_minute_span;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	K_MINUTES() {
	    return this.getToken(CEQLQueryParser.K_MINUTES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterMinute_span(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitMinute_span(this);
		}
	}


}



class Second_spanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_second_span;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	K_SECONDS() {
	    return this.getToken(CEQLQueryParser.K_SECONDS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterSecond_span(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitSecond_span(this);
		}
	}


}



class Custom_spanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_custom_span;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	LEFT_SQUARE_BRACKET() {
	    return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, 0);
	};

	any_name() {
	    return this.getTypedRuleContext(Any_nameContext,0);
	};

	RIGHT_SQUARE_BRACKET() {
	    return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCustom_span(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCustom_span(this);
		}
	}


}



class Named_eventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_named_event;
    }

	s_event_name() {
	    return this.getTypedRuleContext(S_event_nameContext,0);
	};

	K_AS() {
	    return this.getToken(CEQLQueryParser.K_AS, 0);
	};

	event_name() {
	    return this.getTypedRuleContext(Event_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNamed_event(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitNamed_event(this);
		}
	}


}



class S_event_name_with_projectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_s_event_name_with_projection;
    }

	s_event_name() {
	    return this.getTypedRuleContext(S_event_nameContext,0);
	};

	LEFT_SQUARE_BRACKET() {
	    return this.getToken(CEQLQueryParser.LEFT_SQUARE_BRACKET, 0);
	};

	list_of_attribute_names() {
	    return this.getTypedRuleContext(List_of_attribute_namesContext,0);
	};

	RIGHT_SQUARE_BRACKET() {
	    return this.getToken(CEQLQueryParser.RIGHT_SQUARE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterS_event_name_with_projection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitS_event_name_with_projection(this);
		}
	}


}



class S_event_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_s_event_name;
    }

	event_name() {
	    return this.getTypedRuleContext(Event_nameContext,0);
	};

	stream_name() {
	    return this.getTypedRuleContext(Stream_nameContext,0);
	};

	GE() {
	    return this.getToken(CEQLQueryParser.GE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterS_event_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitS_event_name(this);
		}
	}


}



class Event_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_event_name;
    }

	any_name() {
	    return this.getTypedRuleContext(Any_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterEvent_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitEvent_name(this);
		}
	}


}



class Atomic_cel_formulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_atomic_cel_formula;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Atomic_cel_formula_filterContext extends Atomic_cel_formulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	atomic_cel_formula() {
	    return this.getTypedRuleContext(Atomic_cel_formulaContext,0);
	};

	K_FILTER() {
	    return this.getToken(CEQLQueryParser.K_FILTER, 0);
	};

	filter() {
	    return this.getTypedRuleContext(FilterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAtomic_cel_formula_filter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitAtomic_cel_formula_filter(this);
		}
	}


}

CEQLQueryParser.Atomic_cel_formula_filterContext = Atomic_cel_formula_filterContext;

class Atomic_cel_formula_rContext extends Atomic_cel_formulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	s_event_name() {
	    return this.getTypedRuleContext(S_event_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAtomic_cel_formula_r(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitAtomic_cel_formula_r(this);
		}
	}


}

CEQLQueryParser.Atomic_cel_formula_rContext = Atomic_cel_formula_rContext;

class Stream_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_stream_name;
    }

	any_name() {
	    return this.getTypedRuleContext(Any_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterStream_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitStream_name(this);
		}
	}


}



class List_of_attribute_namesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_list_of_attribute_names;
    }

	attribute_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Attribute_nameContext);
	    } else {
	        return this.getTypedRuleContext(Attribute_nameContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.COMMA);
	    } else {
	        return this.getToken(CEQLQueryParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterList_of_attribute_names(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitList_of_attribute_names(this);
		}
	}


}



class Attribute_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_attribute_name;
    }

	any_name() {
	    return this.getTypedRuleContext(Any_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAttribute_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitAttribute_name(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_integer;
    }

	INTEGER_LITERAL() {
	    return this.getToken(CEQLQueryParser.INTEGER_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitInteger(this);
		}
	}


}



class DoubleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_double;
    }

	DOUBLE_LITERAL() {
	    return this.getToken(CEQLQueryParser.DOUBLE_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterDouble(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitDouble(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_number;
    }

	integer() {
	    return this.getTypedRuleContext(IntegerContext,0);
	};

	double_() {
	    return this.getTypedRuleContext(DoubleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitNumber(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_string;
    }

	STRING_LITERAL() {
	    return this.getToken(CEQLQueryParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitString(this);
		}
	}


}



class Any_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_any_name;
    }

	IDENTIFIER() {
	    return this.getToken(CEQLQueryParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAny_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitAny_name(this);
		}
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_keyword;
    }

	K_ALL() {
	    return this.getToken(CEQLQueryParser.K_ALL, 0);
	};

	K_AND() {
	    return this.getToken(CEQLQueryParser.K_AND, 0);
	};

	K_ANY() {
	    return this.getToken(CEQLQueryParser.K_ANY, 0);
	};

	K_AS() {
	    return this.getToken(CEQLQueryParser.K_AS, 0);
	};

	K_BY() {
	    return this.getToken(CEQLQueryParser.K_BY, 0);
	};

	K_CONSUME() {
	    return this.getToken(CEQLQueryParser.K_CONSUME, 0);
	};

	K_DISTINCT() {
	    return this.getToken(CEQLQueryParser.K_DISTINCT, 0);
	};

	K_EVENT() {
	    return this.getToken(CEQLQueryParser.K_EVENT, 0);
	};

	K_EVENTS() {
	    return this.getToken(CEQLQueryParser.K_EVENTS, 0);
	};

	K_FILTER() {
	    return this.getToken(CEQLQueryParser.K_FILTER, 0);
	};

	K_FROM() {
	    return this.getToken(CEQLQueryParser.K_FROM, 0);
	};

	K_HOURS() {
	    return this.getToken(CEQLQueryParser.K_HOURS, 0);
	};

	K_IN() {
	    return this.getToken(CEQLQueryParser.K_IN, 0);
	};

	K_LAST() {
	    return this.getToken(CEQLQueryParser.K_LAST, 0);
	};

	K_LIKE() {
	    return this.getToken(CEQLQueryParser.K_LIKE, 0);
	};

	K_MAX() {
	    return this.getToken(CEQLQueryParser.K_MAX, 0);
	};

	K_MINUTES() {
	    return this.getToken(CEQLQueryParser.K_MINUTES, 0);
	};

	K_NEXT() {
	    return this.getToken(CEQLQueryParser.K_NEXT, 0);
	};

	K_NONE() {
	    return this.getToken(CEQLQueryParser.K_NONE, 0);
	};

	K_NOT() {
	    return this.getToken(CEQLQueryParser.K_NOT, 0);
	};

	K_OR() {
	    return this.getToken(CEQLQueryParser.K_OR, 0);
	};

	K_PARTITION() {
	    return this.getToken(CEQLQueryParser.K_PARTITION, 0);
	};

	K_RANGE() {
	    return this.getToken(CEQLQueryParser.K_RANGE, 0);
	};

	K_SECONDS() {
	    return this.getToken(CEQLQueryParser.K_SECONDS, 0);
	};

	K_SELECT() {
	    return this.getToken(CEQLQueryParser.K_SELECT, 0);
	};

	K_STREAM() {
	    return this.getToken(CEQLQueryParser.K_STREAM, 0);
	};

	K_STRICT() {
	    return this.getToken(CEQLQueryParser.K_STRICT, 0);
	};

	K_UNLESS() {
	    return this.getToken(CEQLQueryParser.K_UNLESS, 0);
	};

	K_WHERE() {
	    return this.getToken(CEQLQueryParser.K_WHERE, 0);
	};

	K_WITHIN() {
	    return this.getToken(CEQLQueryParser.K_WITHIN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitKeyword(this);
		}
	}


}



class RegexpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_regexp;
    }

	REGEX_START() {
	    return this.getToken(CEQLQueryParser.REGEX_START, 0);
	};

	regexp_alternation() {
	    return this.getTypedRuleContext(Regexp_alternationContext,0);
	};

	REGEX_END() {
	    return this.getToken(CEQLQueryParser.REGEX_END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterRegexp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitRegexp(this);
		}
	}


}



class Regexp_alternationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_regexp_alternation;
    }

	regexp_exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Regexp_expContext);
	    } else {
	        return this.getTypedRuleContext(Regexp_expContext,i);
	    }
	};

	REGEX_PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.REGEX_PIPE);
	    } else {
	        return this.getToken(CEQLQueryParser.REGEX_PIPE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterRegexp_alternation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitRegexp_alternation(this);
		}
	}


}



class Regexp_expContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_regexp_exp;
    }

	regexp_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Regexp_elementContext);
	    } else {
	        return this.getTypedRuleContext(Regexp_elementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterRegexp_exp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitRegexp_exp(this);
		}
	}


}



class Regexp_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_regexp_element;
    }

	regexp_group() {
	    return this.getTypedRuleContext(Regexp_groupContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterRegexp_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitRegexp_element(this);
		}
	}


}



class Regexp_groupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_regexp_group;
    }

	parenthesis() {
	    return this.getTypedRuleContext(ParenthesisContext,0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterRegexp_group(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitRegexp_group(this);
		}
	}


}



class ParenthesisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_parenthesis;
    }

	REGEX_L_PAR() {
	    return this.getToken(CEQLQueryParser.REGEX_L_PAR, 0);
	};

	regexp_alternation() {
	    return this.getTypedRuleContext(Regexp_alternationContext,0);
	};

	REGEX_R_PAR() {
	    return this.getToken(CEQLQueryParser.REGEX_R_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterParenthesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitParenthesis(this);
		}
	}


}



class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_quantifier;
    }

	REGEX_QUESTION() {
	    return this.getToken(CEQLQueryParser.REGEX_QUESTION, 0);
	};

	REGEX_PLUS() {
	    return this.getToken(CEQLQueryParser.REGEX_PLUS, 0);
	};

	REGEX_STAR() {
	    return this.getToken(CEQLQueryParser.REGEX_STAR, 0);
	};

	REGEX_L_CURLY() {
	    return this.getToken(CEQLQueryParser.REGEX_L_CURLY, 0);
	};

	quantity() {
	    return this.getTypedRuleContext(QuantityContext,0);
	};

	REGEX_R_CURLY() {
	    return this.getToken(CEQLQueryParser.REGEX_R_CURLY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitQuantifier(this);
		}
	}


}



class QuantityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_quantity;
    }

	quantExact() {
	    return this.getTypedRuleContext(QuantExactContext,0);
	};

	quantRange() {
	    return this.getTypedRuleContext(QuantRangeContext,0);
	};

	quantMin() {
	    return this.getTypedRuleContext(QuantMinContext,0);
	};

	quantMax() {
	    return this.getTypedRuleContext(QuantMaxContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterQuantity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitQuantity(this);
		}
	}


}



class QuantExactContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_quantExact;
    }

	regexp_number() {
	    return this.getTypedRuleContext(Regexp_numberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterQuantExact(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitQuantExact(this);
		}
	}


}



class QuantRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_quantRange;
    }

	regexp_number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Regexp_numberContext);
	    } else {
	        return this.getTypedRuleContext(Regexp_numberContext,i);
	    }
	};

	REGEX_COMMA() {
	    return this.getToken(CEQLQueryParser.REGEX_COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterQuantRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitQuantRange(this);
		}
	}


}



class QuantMinContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_quantMin;
    }

	regexp_number() {
	    return this.getTypedRuleContext(Regexp_numberContext,0);
	};

	REGEX_COMMA() {
	    return this.getToken(CEQLQueryParser.REGEX_COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterQuantMin(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitQuantMin(this);
		}
	}


}



class QuantMaxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_quantMax;
    }

	REGEX_COMMA() {
	    return this.getToken(CEQLQueryParser.REGEX_COMMA, 0);
	};

	regexp_number() {
	    return this.getTypedRuleContext(Regexp_numberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterQuantMax(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitQuantMax(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_atom;
    }

	characterClass() {
	    return this.getTypedRuleContext(CharacterClassContext,0);
	};

	sharedAtom() {
	    return this.getTypedRuleContext(SharedAtomContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitAtom(this);
		}
	}


}



class CharacterClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_characterClass;
    }

	REGEX_L_BRACK() {
	    return this.getToken(CEQLQueryParser.REGEX_L_BRACK, 0);
	};

	REGEX_R_BRACK() {
	    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
	};

	REGEX_HAT() {
	    return this.getToken(CEQLQueryParser.REGEX_HAT, 0);
	};

	ccAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcAtomContext);
	    } else {
	        return this.getTypedRuleContext(CcAtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCharacterClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCharacterClass(this);
		}
	}


}



class CcAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_ccAtom;
    }

	ccRange() {
	    return this.getTypedRuleContext(CcRangeContext,0);
	};

	sharedAtom() {
	    return this.getTypedRuleContext(SharedAtomContext,0);
	};

	ccSingle() {
	    return this.getTypedRuleContext(CcSingleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCcAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCcAtom(this);
		}
	}


}



class CcRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_ccRange;
    }

	ccLiteral = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcLiteralContext);
	    } else {
	        return this.getTypedRuleContext(CcLiteralContext,i);
	    }
	};

	REGEX_HYPHEN() {
	    return this.getToken(CEQLQueryParser.REGEX_HYPHEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCcRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCcRange(this);
		}
	}


}



class CcSingleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_ccSingle;
    }

	ccLiteral() {
	    return this.getTypedRuleContext(CcLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCcSingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCcSingle(this);
		}
	}


}



class CcLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_ccLiteral;
    }

	ccEscapes() {
	    return this.getTypedRuleContext(CcEscapesContext,0);
	};

	ccOther() {
	    return this.getTypedRuleContext(CcOtherContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCcLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCcLiteral(this);
		}
	}


}



class CcEscapesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_ccEscapes;
    }

	REGEX_BACKSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.REGEX_BACKSLASH);
	    } else {
	        return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, i);
	    }
	};


	REGEX_HAT() {
	    return this.getToken(CEQLQueryParser.REGEX_HAT, 0);
	};

	REGEX_HYPHEN() {
	    return this.getToken(CEQLQueryParser.REGEX_HYPHEN, 0);
	};

	REGEX_R_BRACK() {
	    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCcEscapes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCcEscapes(this);
		}
	}


}



class CcOtherContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_ccOther;
    }

	REGEX_HAT() {
	    return this.getToken(CEQLQueryParser.REGEX_HAT, 0);
	};

	REGEX_HYPHEN() {
	    return this.getToken(CEQLQueryParser.REGEX_HYPHEN, 0);
	};

	REGEX_R_BRACK() {
	    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
	};

	REGEX_BACKSLASH() {
	    return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterCcOther(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitCcOther(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_literal;
    }

	escapes() {
	    return this.getTypedRuleContext(EscapesContext,0);
	};

	REGEX_DOT() {
	    return this.getToken(CEQLQueryParser.REGEX_DOT, 0);
	};

	other() {
	    return this.getTypedRuleContext(OtherContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class EscapesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_escapes;
    }

	REGEX_BACKSLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.REGEX_BACKSLASH);
	    } else {
	        return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, i);
	    }
	};


	REGEX_L_BRACK() {
	    return this.getToken(CEQLQueryParser.REGEX_L_BRACK, 0);
	};

	REGEX_R_BRACK() {
	    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
	};

	REGEX_L_PAR() {
	    return this.getToken(CEQLQueryParser.REGEX_L_PAR, 0);
	};

	REGEX_R_PAR() {
	    return this.getToken(CEQLQueryParser.REGEX_R_PAR, 0);
	};

	REGEX_L_CURLY() {
	    return this.getToken(CEQLQueryParser.REGEX_L_CURLY, 0);
	};

	REGEX_R_CURLY() {
	    return this.getToken(CEQLQueryParser.REGEX_R_CURLY, 0);
	};

	REGEX_STAR() {
	    return this.getToken(CEQLQueryParser.REGEX_STAR, 0);
	};

	REGEX_PLUS() {
	    return this.getToken(CEQLQueryParser.REGEX_PLUS, 0);
	};

	REGEX_QUESTION() {
	    return this.getToken(CEQLQueryParser.REGEX_QUESTION, 0);
	};

	REGEX_PIPE() {
	    return this.getToken(CEQLQueryParser.REGEX_PIPE, 0);
	};

	REGEX_DOT() {
	    return this.getToken(CEQLQueryParser.REGEX_DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterEscapes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitEscapes(this);
		}
	}


}



class OtherContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_other;
    }

	REGEX_L_BRACK() {
	    return this.getToken(CEQLQueryParser.REGEX_L_BRACK, 0);
	};

	REGEX_R_BRACK() {
	    return this.getToken(CEQLQueryParser.REGEX_R_BRACK, 0);
	};

	REGEX_L_PAR() {
	    return this.getToken(CEQLQueryParser.REGEX_L_PAR, 0);
	};

	REGEX_R_PAR() {
	    return this.getToken(CEQLQueryParser.REGEX_R_PAR, 0);
	};

	REGEX_L_CURLY() {
	    return this.getToken(CEQLQueryParser.REGEX_L_CURLY, 0);
	};

	REGEX_R_CURLY() {
	    return this.getToken(CEQLQueryParser.REGEX_R_CURLY, 0);
	};

	REGEX_STAR() {
	    return this.getToken(CEQLQueryParser.REGEX_STAR, 0);
	};

	REGEX_PLUS() {
	    return this.getToken(CEQLQueryParser.REGEX_PLUS, 0);
	};

	REGEX_QUESTION() {
	    return this.getToken(CEQLQueryParser.REGEX_QUESTION, 0);
	};

	REGEX_PIPE() {
	    return this.getToken(CEQLQueryParser.REGEX_PIPE, 0);
	};

	REGEX_BACKSLASH() {
	    return this.getToken(CEQLQueryParser.REGEX_BACKSLASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterOther(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitOther(this);
		}
	}


}



class SharedAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_sharedAtom;
    }

	REGEX_DECIMAL_DIGIT() {
	    return this.getToken(CEQLQueryParser.REGEX_DECIMAL_DIGIT, 0);
	};

	REGEX_NOT_DECIMAL_DIGIT() {
	    return this.getToken(CEQLQueryParser.REGEX_NOT_DECIMAL_DIGIT, 0);
	};

	REGEX_WHITESPACE() {
	    return this.getToken(CEQLQueryParser.REGEX_WHITESPACE, 0);
	};

	REGEX_NOT_WHITESPACE() {
	    return this.getToken(CEQLQueryParser.REGEX_NOT_WHITESPACE, 0);
	};

	REGEX_ALPHANUMERIC() {
	    return this.getToken(CEQLQueryParser.REGEX_ALPHANUMERIC, 0);
	};

	REGEX_NOT_ALPHANUMERIC() {
	    return this.getToken(CEQLQueryParser.REGEX_NOT_ALPHANUMERIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterSharedAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.exitSharedAtom(this);
		}
	}


}



class Regexp_numberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CEQLQueryParser.RULE_regexp_number;
    }

	REGEX_DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CEQLQueryParser.REGEX_DIGIT);
	    } else {
	        return this.getToken(CEQLQueryParser.REGEX_DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
	        listener.enterRegexp_number(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CEQLQueryParserListener ) {
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
CEQLQueryParser.String_literal_or_regexpContext = String_literal_or_regexpContext; 
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
CEQLQueryParser.S_event_name_with_projectionContext = S_event_name_with_projectionContext; 
CEQLQueryParser.S_event_nameContext = S_event_nameContext; 
CEQLQueryParser.Event_nameContext = Event_nameContext; 
CEQLQueryParser.Atomic_cel_formulaContext = Atomic_cel_formulaContext; 
CEQLQueryParser.Stream_nameContext = Stream_nameContext; 
CEQLQueryParser.List_of_attribute_namesContext = List_of_attribute_namesContext; 
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
