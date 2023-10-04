## Theory

Linear Time-Invariant (LTI) for continuous time system is commonly referred to as Linear Shift-Invariant (LSI) system for discrete time systems. Such systems have the following properties:

1.Linearity: It implies that the relationship between the input and the output are linear. If the input sequence x1(n) produces the output sequence y1(n), and the input sequence x2(n) produces the output sequence y2(n), then the scaled and the summed input a1 x1(n) + a2 x2(n) produces the scaled and summed output response a1 y1(n) + a2 y2(n), where a1 and a2 are constant scalars. This is known as principle of superposition.

2.Time/Shift Invariant: It implies that if the input is applied at a delay of T sequences, then the output will be identical except for a time-delay of T sequences. Thus if the output due to the input x(n) is y(n), then the output due to the input x(n-T) will be y(n-T). Hence the system is time-invariant or rather shift -invariant because the output does not depend on the particular time the input is applied.

Any Linear- Time/Shift invariant system can be characterized entirely by a single function called the system's impulse response

 <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js"></script>    
 