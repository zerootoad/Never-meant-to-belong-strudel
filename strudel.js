setcpm(70/4)

$:   note("b5 c6 e6 d6").fastGap(8).sound("piano")
.mask("<0!4 1 0 1 0!100>")
.early(0.10)

$:   note("b5 c6 g6 e6").fastGap(8).sound("piano")
.mask("<0!8 1 0!100>")
.early(0.10)

$:   note("a4 b4 g5 -").fastGap(8).sound("piano")
.mask("<0!12 1 0!100>")
.early(0.10)

$: arrange( // Never meant to belong - Bleach (strudle.cc)
  [1, "[a1], [a2], b3 b3 a3 a3, c4 c4 c4 c4, e4 e4 e4 e4"],
  [1, "[g1], [g2], b3 b3 a3 a3, c4 c4 c4 c4, e4 e4 e4 e4"],
  [1, "[f1], [f2], b3 b3 a3 a3, c4 c4 c4 c4, e4 e4 e4 e4"],
  [1, "[e1], [e2], a3 a3 ab3 ab3, b3 b3 b3 b3, e4 e4 e4 e4".clip("1 1 1 0.80")],
  [1, "-, [a1], [a2], b3 b3 a3 a3, c4 c4 c4 c4, e4 e4 e4 e4"],
  [1, "[g1], [g2], b3 b3 a3 a3, c4 c4 c4 c4, e4 e4 e4 e4".clip("1 1 1 0.80")],
  [1, "-, [f1], [f2], b3 b3 a3 a3, c4 c4 c4 c4, e4 e4 e4 e4"],
  [1, "[e1], [e2], a3 a3 ab3 ab3, b3 b3 b3 b3, e4 e4 e4 e4".clip("1 1 1 0.80")],
  [1, stack(
  "a1 - - -, a2 - - -, b3 b3 a3 a3, c4 c4 c4 c4, e4 e4 e4 e4",
  "- - - -, - - - -, - - - -, - - e6 -",
  "- - - -, - - - -, - - - -, - - eb6 -".early(0.05),
  "- - - -, - - - -, - - - -, - - - -, eb6 - - -".early(0.05)
  )],
  [1, stack(
  "g2 - - -, b3 b3 a3 a3, c4 c4 c4 c4, e6 e4 e4 e4",
  "- - - -, - - - -, - - - -, - - e6/ 1.7 -",
  "- - - -, - - - -, - - - -, - - - -, f6@0.4 - - -".early(0.10), 
  " - - -, - - - -, - - - -, - - eb6 -".early(0.05)
  )],
  [1, stack(
  "f2 - - -, b3 b3 a3 a3 , c4 c4 c4 c4, - e4 e4 e4",
  "- - - -, - - - -, - - - -, e6@1.8 [d6@0.35 c6@0.35 b5@0.6] [a5@1.5] g5@0.5",  
  )],
  [1, stack(
  "e2 - - -, e3 - - -, a3 a3 ab3 ab3, b3 b3 b3 b3, e4 e4 e4 -", 
  "- - - -, - - - -, - - - -, - - - -, - - - e4@0.5".early(0.1),
  "gb5@0.8 f5@0.7 e5@0.5 - -"
  )],
  [1, stack(
  "- - - -, a1 - - -, a2 - - -, e5/1.7 - - -",
  "- - - -, - b3 - -, - c4 - -, - e4 - - ",
  "- - - -, - - - -, - - - -, - - eb5@0.3 -".early(0.2),
  )],
  [1, stack(
    "a3 a3 - -, c4 c4 - -, e4 e4 - -",
    "e5/1.7 - - - "
  )]
).note().sound("piano")
