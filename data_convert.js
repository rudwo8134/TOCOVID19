$(document).ready(function(){
    $.ajax({
     url:"canada.csv",
     dataType:"text",
     success:function(data)
     {
      var corona_data = data.split(/\r?\n/);
      var table_data = '<table class="table table-bordered table-striped">';
      for(var count = 0; count<corona_data.length-1; count++)
      {
       var cell_data = corona_data[count].split(",");
       table_data += '<tr>';
       for(var cell_count=0; cell_count<4; cell_count++)
       {
        if(count === 0)
        {
         table_data += '<th id="th1">'+cell_data[cell_count]+'</th>';
        }
        else
        {
         table_data += '<td id="td1">'+cell_data[cell_count]+'</td>';
        }
       }
       table_data += '</tr>';
      }
      table_data += '</table>';
      $('#employee_table').html(table_data);
     }
   });
   
  });
  $(document).ready(function(){
    $.ajax({
     url:"canada.csv",
     dataType:"text",
     success:function(data)
     {
      var corona_data = data.split(/\r?\n/);
      var table_data = '<table class="table table-bordered table-striped">';
      for(var count = 0; count<corona_data.length-1; count++)
      {
       var cell_data = corona_data[count].split(",");
       table_data += '<tr>';
       for(var cell_count=4; cell_count<8; cell_count++)
       {
        if(count === 0)
        {
         table_data += '<th id="th2">'+cell_data[cell_count]+'</th>';
        }
        else
        {
         table_data += '<td id="td2"><i class="fas fa-arrow-up"></i> '+cell_data[cell_count]+'</td>';
        }
       }
       table_data += '</tr>';
      }
      table_data += '</table>';
      $('#employee_table2').html(table_data);
     }
   });
   
  });
  $(document).ready(function(){
    $.ajax({
     url:"canada.csv",
     dataType:"text",
     success:function(data)
     {
      var corona_data = data.split(/\r?\n/);
      var table_data = '<table class="table table-bordered table-striped">';
      for(var count = 0; count<corona_data.length-1; count++)
      {
       var cell_data = corona_data[count].split(",");
       table_data += '<tr>';
       for(var cell_count=8; cell_count<12; cell_count++)
       {
        if(count === 0)
        {
         table_data += '<th id="th3">'+cell_data[cell_count]+'</th>';
        }
        else
        {
         table_data += '<td id="td3">'+cell_data[cell_count]+'</td>';
        }
       }
       table_data += '</tr>';
      }
      table_data += '</table>';
      $('#employee_table3').html(table_data);
     }
   });
   
  });
  $(document).ready(function(){
    $.ajax({
     url:"canada.csv",
     dataType:"text",
     success:function(data)
     {
      var corona_data = data.split(/\r?\n/);
      var table_data = '<table class="table table-bordered table-striped">';
      for(var count = 0; count<corona_data.length-1; count++)
      {
       var cell_data = corona_data[count].split(",");
       table_data += '<tr>';
       for(var cell_count=12; cell_count<16; cell_count++)
       {
        if(count === 0)
        {
         table_data += '<th id="th4">'+cell_data[cell_count]+'</th>';
        }
        else
        {
         table_data += '<td id="td4"><i class="fas fa-arrow-up"></i> '+cell_data[cell_count]+'</td>';
        }
       }
       table_data += '</tr>';
      }
      table_data += '</table>';
      $('#employee_table4').html(table_data);
     }
    });
   
  });
  $(document).ready(function(){
    $.ajax({
     url:"canada.csv",
     dataType:"text",
     success:function(data)
     {
      var corona_data = data.split(/\r?\n/);
      var table_data = '<table class="table table-bordered table-striped">';
      for(var count = 0; count<corona_data.length-1; count++)
      {
       var cell_data = corona_data[count].split(",");
       table_data += '<tr>';
       for(var cell_count=16; cell_count<20; cell_count++)
       {
        if(count === 0)
        {
         table_data += '<th id="th5">'+cell_data[cell_count]+'</th>';
        }
        else
        {
         table_data += '<td id="td5">'+cell_data[cell_count]+'</td>';
        }
       }
       table_data += '</tr>';
      }
      table_data += '</table>';
      $('#employee_table5').html(table_data);
     }
    });
   
  });
  $(document).ready(function(){
    $.ajax({
     url:"canada.csv",
     dataType:"text",
     success:function(data)
     {
      var corona_data = data.split(/\r?\n/);
      var table_data = '<table class="table table-bordered table-striped">';
      for(var count = 0; count<corona_data.length-1; count++)
      {
       var cell_data = corona_data[count].split(",");
       table_data += '<tr>';
       for(var cell_count=20; cell_count<22; cell_count++)
       {
        if(count === 0)
        {
         table_data += '<th id="th6">'+cell_data[cell_count]+'</th>';
        }
        else
        {
         table_data += '<td id="td6">'+cell_data[cell_count]+'</td>';
        }
       }
       table_data += '</tr>';
      }
      table_data += '</table>';
      $('#employee_table6').html(table_data);
     }
    });
   
  });

