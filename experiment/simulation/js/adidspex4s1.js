/*
This scrtpt file is developed by
Aditya Kameswara Rao Nandula
Senior Research Fellow,
Virtual Labs IIT Kharagpur.
LinkedIn: https://www.linkedin.com/in/akraonandula/
Updated on: 06-05-2022

*/
var b1 = document.getElementById('b1'),
    b2 = document.getElementById('b2'),
    b3 = document.getElementById('b3'),
    b4 = document.getElementById('b4'),// fourth block added in the exp3
    b5 = document.getElementById('b5'),
    b6 = document.getElementById('b6'),
    b7 = document.getElementById('b7'),
    b8 = document.getElementById('b8'),
    b9 = document.getElementById('b9');
    
    
b12 = new LeaderLine(b1, b2,
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('x1(t)', {fontFamily: 'Arial, sans-serif'})});
b23 = new LeaderLine(b2, LeaderLine.pointAnchor(b3, {x: '0%', y: '10%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('x1(n)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch1', {fontFamily: 'Arial, sans-serif'})});
b34 = new LeaderLine(b3, LeaderLine.pointAnchor(b4, {x: '0%', y: '10%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('x1(n)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch1', {fontFamily: 'Arial, sans-serif'})});
b45 = new LeaderLine(b4, LeaderLine.pointAnchor(b5, {x: '0%', y: '10%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('y1(n)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch1', {fontFamily: 'Arial, sans-serif'})});
b67 = new LeaderLine(b6, LeaderLine.pointAnchor(b7, {x: '0%', y: '10%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('x2(t)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch2', {fontFamily: 'Arial, sans-serif'})});

b78 = new LeaderLine(b7, LeaderLine.pointAnchor(b8, {x: '0%', y: '10%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('x2(n)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch2', {fontFamily: 'Arial, sans-serif'})});
b89 = new LeaderLine(b8, LeaderLine.pointAnchor(b9, {x: '0%', y: '10%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('x2(n)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch2', {fontFamily: 'Arial, sans-serif'})});

b95 = new LeaderLine(b9, LeaderLine.pointAnchor(b5, {x: '0%', y: '10%'}),
      {startPlug: 'disc',endPlug: 'arrow3', middleLabel: LeaderLine.pathLabel('y2(n)', {fontFamily: 'Arial, sans-serif'}), endLabel: LeaderLine.pathLabel('Ch2', {fontFamily: 'Arial, sans-serif'})});


  new PlainDraggable(b1,{
    onMove: function() { $("#s1").prop("checked",false),
    $("#sn").text("Circuit OFF"),
    $("#sn").css("background","red"),
    b12.dash = false,
    b23.dash = false,
    b34.dash = false,
    b45.dash = false,
    b67.dash = false,
    b78.dash = false,
    b89.dash = false,
    b95.dash = false,
    $("#grp").slideUp(),
    $("#ctl").slideUp(),
    $("#pa").slideUp(),
    ckt=0,
    plt(0),
    b12.position()}});

  new PlainDraggable(b2, {
    onMove: function() {$("#s1").prop("checked",false),
    $("#sn").text("Circuit OFF"),
    $("#sn").css("background","red"),
    b12.dash = false,
    b23.dash = false,
    b34.dash = false,
    b45.dash = false,
    b67.dash = false,
    b78.dash = false,
    b89.dash = false,
    b95.dash = false,
    $("#grp").slideUp(),
    $("#ctl").slideUp(),
    $("#pa").slideUp(),
    ckt=0,
    plt(0),
    b23.position(),b12.position();}}); 

  new PlainDraggable(b3, {
    onMove: function() { $("#s1").prop("checked",false),
    $("#sn").text("Circuit OFF"),
    $("#sn").css("background","red"),
    b12.dash = false,
    b23.dash = false,
    b34.dash = false,
    b45.dash = false,
    b67.dash = false,
    b78.dash = false,
    b89.dash = false,
    b95.dash = false,
    $("#grp").slideUp(),
    $("#ctl").slideUp(),
    $("#pa").slideUp(),
    ckt=0,
    plt(0),
    b23.position(),b34.position();}});
    new PlainDraggable(b4, {
      onMove: function() { $("#s1").prop("checked",false),
      $("#sn").text("Circuit OFF"),
      $("#sn").css("background","red"),
      b12.dash = false,
      b23.dash = false,
      b34.dash = false,
      b45.dash = false,
      b67.dash = false,
      b78.dash = false,
      b89.dash = false,
      b95.dash = false,
      $("#grp").slideUp(),
      $("#ctl").slideUp(),
      $("#pa").slideUp(),
      ckt=0,
      plt(0),
      b34.position(),b45.position();}});
    
      new PlainDraggable(b5, {
        onMove: function() { $("#s1").prop("checked",false),
        $("#sn").text("Circuit OFF"),
        $("#sn").css("background","red"),
        b12.dash = false,
        b23.dash = false,
        b34.dash = false,
        b45.dash = false,
        b67.dash = false,
        b78.dash = false,
        b89.dash = false,
        b95.dash = false,
        $("#grp").slideUp(),
        $("#ctl").slideUp(),
        $("#pa").slideUp(),
        ckt=0,
        plt(0),
        b45.position(),b95.position();}});
      
          new PlainDraggable(b6, {
            onMove: function() { $("#s1").prop("checked",false),
            $("#sn").text("Circuit OFF"),
            $("#sn").css("background","red"),
            b12.dash = false,
            b23.dash = false,
            b34.dash = false,
            b45.dash = false,
            b67.dash = false,
            b78.dash = false,
            b89.dash = false,
            b95.dash = false,
            $("#grp").slideUp(),
            $("#ctl").slideUp(),
            $("#pa").slideUp(),
            ckt=0,
            plt(0),
            b67.position()}});
            new PlainDraggable(b7, {
              onMove: function() { $("#s1").prop("checked",false),
              $("#sn").text("Circuit OFF"),
              $("#sn").css("background","red"),
              b12.dash = false,
              b23.dash = false,
              b34.dash = false,
              b45.dash = false,
              b67.dash = false,
              b78.dash = false,
              b89.dash = false,
              b95.dash = false,
              $("#grp").slideUp(),
              $("#ctl").slideUp(),
              $("#pa").slideUp(),
              ckt=0,
              plt(0),
              b67.position(),b78.position();}});
              new PlainDraggable(b8, {
                onMove: function() { $("#s1").prop("checked",false),
                $("#sn").text("Circuit OFF"),
                $("#sn").css("background","red"),
                b12.dash = false,
                b23.dash = false,
                b34.dash = false,
                b45.dash = false,
                b67.dash = false,
                b78.dash = false,
                b89.dash = false,
                b95.dash = false,
                $("#grp").slideUp(),
                $("#ctl").slideUp(),
                $("#pa").slideUp(),
                ckt=0,
                plt(0),
                b78.position(),b89.position();}});
                new PlainDraggable(b9, {
                  onMove: function() { $("#s1").prop("checked",false),
                  $("#sn").text("Circuit OFF"),
                  $("#sn").css("background","red"),
                  b12.dash = false,
                  b23.dash = false,
                  b34.dash = false,
                  b45.dash = false,
                  b67.dash = false,
                  b78.dash = false,
                  b89.dash = false,
                  b95.dash = false,
                  $("#grp").slideUp(),
                  $("#ctl").slideUp(),
                  $("#pa").slideUp(),
                  ckt=0,
                  plt(0),
                  b89.position(),b95.position();}});
        
  var ckt=0;
  var ch=0;
  var clp=0;
  var st=[];
  var stsa=[];
  var stqa=[];
  var stga1=[];
  var A1=0;
  var A2=0;
  var fm=0;
  var fs=0;
  var G1=0;
  var G2=0;
  var fre1=0;
  var fre2=0;
  var fre3=0;
  var L =0;
  var vmax =0;
  var vmin =0;
  var deta =0;
  function rng(start,len,end) {
      var ans = [];
      for (var i = start; i < len; i++) {
          ans.push(start+i/len*end);
      }
      return ans;
  };
  function po(v,x) {
              var ans = [];
              for(let i=0;v[i]!=undefined;i++)
                  {
                        ans.push(v[i]+Number(x));
                      }
              return ans;
    };
  function rngscn(a,f,x) {
      var ans = [];
        for(let i=0;x[i]!=undefined;i++)
          {
            ans.push(a*Math.sin(f*x[i]));
          }
      return ans;
  };
  function sinc(item,index) {
    st[index]=A1*Math.sin(2*Math.PI*fre1*item);
  };
  
  function samp(item,index) {
    stsa[index]=A2*Math.sin(2*Math.PI*fre3*item);
     stga1[index]=stsa[index]*G1;
    // stga2[index]=stsa[index]*G2;
    // add1=Math.Sum(stga1,stga2);
    // Dspsys=2*x(n);
  };
                

  // function dspsys(n){
  //   y(n)=2*x(n)
  // }
// function compa(stsa,A,z){
//   var ans =[];
//   for (let i=0;x)

// }
  
  //  var r = 0
  //  var L=2^r
  //  var Vmin=Math.min$("#av").val();
  //  var vmax= Math.max$("#av").val();
  //  var delta= (vmax-vmin)/L;
  //  console.log(vmax);
   
  //  var I=Math.round((V[i]-Vmin)/delta)

  //  Vq = Vmin+delta*I(i)
  //  function quant(item,index) {
  // stqa[index]=Vmin+delta*I(i).sin(2*Math.PI*fre3*item);//quant function added 
  // };
  function quant(item,index) {
    var I=Math.round((stsa[index]-vmin)/deta);
     stqa[index]=(vmin+deta*I);//quant function added 
  };

  // Generate the values for the x[n] signal
  function generateSignalValues() {
    const values = [];
    const samplesPerPhase = 2;
    const totalPhases = 124;
    const totalSamples = samplesPerPhase * totalPhases;

    for (let n = 0; n < totalSamples; n++) {
      const phase = Math.floor(n / samplesPerPhase);
      const x = Math.cos(2 * Math.PI / 6 * phase);
      values.push(x);
    }
    return values;
  }

 
  function plt(cha){
    st=[];
    stsa=[];
    stqa=[];
    var amp= $("#av").val();
    fm= $("#fv").val();
    fs= $("#fsv").val();
    G1= $("#gbv1").val();
    G2= $("#gbv2").val();
    // A= $("#alw").val();
    // mu= $("#ulw").val();
    var vc1= $("#vc1v").val();
    var t1= $("#t1v").val();
    var px1= $("#px1v").val();
    var py1= $("#py1v").val();
    var vc2= $("#vc2v").val();
    var t2= $("#t2v").val();
    var px2= $("#px2v").val();
    var py2= $("#py2v").val();
    var len=1000;
    var y=[];
    var convVec=[];
   
                A1=amp/vc1;
                A2=amp/vc2;
                fre1=fm*t1;
                fre2=fs*t2;
                fre3=fm*t2;
                var tim1= rng(0,len,1);
                var n = rng(0,fs*fm*t2,1);
                zeros = new Array(n.length).fill(0);
                tim1.forEach(sinc);
                n.forEach(samp);
                n.forEach(quant);
                st= po(st,py1);
                stsa= po(stsa,py2);
                var ti1= po(tim1,px1);
                var ti2= po(n,px2);
                
                 
                gr = document.getElementById('grph');
                var in1 = {
                  x: ti1,
                  y: st,
                  type: 'scatter',
                  name: 'Input(Vi)'
                };

                var op1 = {
                  x: ti2,
                  y: stsa,//"signalChart",
                  type: 'scatter',
                  name: 'Output(Vo)',
                  marker: {
                    symbol: 'circle',
                    size: 5
                  },
                  line: {width:0},
                  //hoverinfo: 'x+text', // The default configuration would print "16 +0/-16"...
                  //hovertext: y.map(Plotly.d3.format('.2 ')), // ... so we redefine the text
                  error_y: {
                    type: 'data',
                    symmetric: false,
                    array: zeros, // use zero-filled array
                    arrayminus: stsa, // re-use y values
                    width: 0 // hide cross-bars at end of error bars
                  }
                };
                ;var op2 = {
                  x: ti2,
                  // x: ti2,
                  y: stqa,
                  type: 'line',
                  name: 'Output(Vq)',
                  marker: {
                    symbol: 'circle',
                    size: 5
                  }
                  /* ,line: {width:0},
                  //hoverinfo: 'x+text', // The default configuration would print "16 +0/-16"...
                  //hovertext: y.map(Plotly.d3.format('.2 ')), // ... so we redefine the text
                  error_y: {
                    type: 'data',
                    symmetric: false,
                    array: zeros, // use zero-filled array
                    arrayminus: stqa, // re-use y values
                    width: 0 // hide cross-bars at end of error bars
                  } */
                };
                //  console.log(stga1);

                    if(cha=='1'){
                      var data = [in1];
                      var layout={title: 'Input (Vi)', plot_bgcolor: 'black',paper_bgcolor:'black',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Time (s)',
                        showticklabels: false,
                        autotick: true},
                        yaxis: {
                          title:'Input(V)',
                          showticklabels: true,
                          autotick: true}
                      };
                    }
                    else if(cha=='2'){
                      var data = [op2];
                      var layout={title: 'Quantized signal (Vq)', plot_bgcolor: 'black',paper_bgcolor:'black',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Time (s)',
                        showticklabels: false,
                        autotick: true},
                        yaxis: {
                          title:'Output (V)',
                          showticklabels: true,
                          autotick: true}
                      };
                      }
                    else if(cha=='3'){
                      var data = [in1,op1];
                      var layout={title: 'Sampling theorem plot',plot_bgcolor:'black', paper_bgcolor:'black',text_color:'blue',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Time (s)',
                        showticklabels: false,
                        autotick: true},
                        yaxis: {
                          title:'Vi/Vo (V)',
                          showticklabels: true,
                          autotick: true}
                      };
                    }
                      else if(cha=='4'){
                        var data = [in1,op1,op2];
                        var layout={title: 'Quantization plot',plot_bgcolor:'black', paper_bgcolor:'black',text_color:'blue',
                        font: {
                          family: 'Courier New, monospace',
                          size: 18,
                          color: '#7f7f7f'
                        },
                        xaxis: {
                          title:'Time (s)',
                          showticklabels: false,
                          autotick: true},
                          yaxis: {
                            title:'Vi/Vo (V)',
                            showticklabels: true,
                            autotick: true}
                        };
                      }
                    else{
                      var data = [];
                      var layout={title: 'Sampling theorem plot',plot_bgcolor: 'black',paper_bgcolor:'black',
                      font: {
                        family: 'Courier New, monospace',
                        size: 18,
                        color: '#7f7f7f'
                      },
                      xaxis: {
                        title:'Time (s)',
                        showticklabels: false,
                        autotick: true},
                        yaxis: {
                          title:'Vi/Vo (V)',
                          showticklabels: true,
                          autotick: true}
                      };
                    }
                    var config = {responsive: true};
                    Plotly.newPlot(gr, data,layout,config);
  };

$(document).ready(function(){
    $("#ctl").slideUp();
    $("#vi").text($("#av").val());
    $("#f").text($("#fv").val());
    $("#fs").text($("#fsv").val());
    $("#gv1").text($("#gbv1").val());
    $("#gv2").text($("#gbv2").val());
    // $("#A").text($("#alw").val());
    // $("#mu").text($("#ulw").val());
    $("#vc1").text($("#vc1v").val());
    $("#t1").text($("#t1v").val());
    $("#px1").text($("#px1v").val());
    $("#py1").text($("#py1v").val());
    $("#vc2").text($("#vc2v").val());
    $("#t2").text($("#t2v").val());
    $("#px2").text($("#px2v").val());
    $("#py2").text($("#py2v").val());
    $("#s1").prop("checked",false);
    $("#sn").text("Circuit OFF");
    $("#sn").css("background","red");
    $("#grp").slideUp();
    $("#ctl").slideUp();
    $("#pa").slideUp();
    ckt=0;
    plt(0);
});

    $("#s1").click(function(){
      if(ckt==0){
      $("#sn").text("Circuit ON");
      $("#sn").css("background","green");
      $("#ctl").slideDown("slow");
      $("#grp").slideDown("slow");
      $("#pa").slideDown("slow");
      b12.dash = {animation: true};
      b23.dash = {animation: true};
      b34.dash = {animation: true};
      b45.dash = {animation: true};
      b67.dash = {animation: true};
      b78.dash = {animation: true};
      b89.dash = {animation: true};
      b95.dash = {animation: true};
      ckt=1;
      plt(ch);
    }
    else{
      $("#sn").text("Circuit OFF");
      $("#sn").css("background","red");
      $("#grp").slideUp();
      $("#ctl").slideUp();
      $("#pa").slideUp();
      b12.dash = {animation: false};
      b23.dash = {animation: false};
      b34.dash = {animation: false};
      b45.dash = {animation: false};
      b67.dash = {animation: false};
      b78.dash = {animation: false};
      b89.dash = {animation: false};
      b95.dash = {animation: false};

      b12.dash = false;
      b23.dash = false;
      b34.dash = false;
      b45.dash = false;
      b67.dash = false;
      b78.dash = false;
      b89.dash = false;
      b95.dash = false;
      ckt=0;
      plt(0);
    }
  });

  const chartCanvas = document.getElementById('signalChart');
  new Chart(chartCanvas, {
    type: 'bar',
    data: {
      labels: Array.from({ length: 124 }, (_, i) => i), // x-axis labels for phases
      datasets: [{
        label: 'x[n]',
        data: generateSignalValues(), // y-axis values
        backgroundColor: 'blue',
      }]
    },
    options: {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Time'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'x[n]'
          },
          suggestedMin: -1,
          suggestedMax: 1
        }
      }
    }
  });
  
  // console.log(samp);
    $("#av").change(function(){
      $("#vi").text($("#av").val());
      plt(ch);
    });
    $("#fv").change(function(){
      $("#f").text($("#fv").val());
      plt(ch);
    });
    $("#fsv").change(function(){
      $("#fs").text($("#fsv").val());
      plt(ch);
    });
    $("#gbv1").change(function(){
      $("#gv1").text($("#gbv1").val());
      plt(ch);
    });
    $("#gbv2").change(function(){
      $("#gv2").text($("#gbv2").val());
      plt(ch);
    });
    // $("#alw").change(function(){
    //   $("#A").text($("#alw").val());
    //   plt(ch);
    // });
    // $("#ulw").change(function(){
    //   $("#mu").text($("#ulw").val());
    //   plt(ch);
    // });
    $("#vc1v").change(function(){
      $("#vc1").text($("#vc1v").val());
      plt(ch);
    });
    $("#t1v").change(function(){
      $("#t1").text($("#t1v").val());
      plt(ch);
    });
    $("#px1v").change(function(){
      $("#px1").text($("#px1v").val());
      plt(ch);
    });
    $("#py1v").change(function(){
      $("#py1").text($("#py1v").val());
      plt(ch);
    });
    $("#vc2v").change(function(){
      $("#vc2").text($("#vc2v").val());
      plt(ch);
    });
    $("#t2v").change(function(){
      $("#t2").text($("#t2v").val());
      plt(ch);
    });
    $("#px2v").change(function(){
      $("#px2").text($("#px2v").val());
      plt(ch);
    });
    $("#py2v").change(function(){
      $("#py2").text($("#py2v").val());
      plt(ch);
    });
    $("#bc1").click(function(){
      ch=1;
      plt(ch);
    });
    $("#bc2").click(function(){
      ch=2;
      plt(ch);
    });
    $("#bc3").click(function(){
      ch=4;
      plt(ch);
    });
    $("#du").click(function(){
      ch=3;
      plt(ch);
    });
   