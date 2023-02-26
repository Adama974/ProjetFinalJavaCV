$(document).ready(function(){
  $("#file").on("input", function(){
    $("#recfile").text($(this).val());
  });
});
$(document).ready(function(){
    $("#nomm").on("input", function(){
      $("#recet").text($(this).val());
    });
  });

  $(document).ready(function(){
    $("#prenomm").on("input", function(){
      $("#ren").text($(this).val());
    });
  });

  $(document).ready(function(){
    $("#ad").on("input", function(){
      $("#recad").text($(this).val());
    });
  });
 
  $(document).ready(function(){
    $("#ad_mail").on("input", function(){
      $("#recad_mail").text($(this).val());
    });
  });

  $(document).ready(function(){
    $("#tele").on("input", function(){
      $("#rectele").text($(this).val());
    });
  });

  
$(document).ready(function(){
  $("#etu").on("input", function(){
    $("#recetu").text($(this).val());
  });
});

$(document).ready(function(){
  $("#etu1").on("input", function(){
    $("#recetu1").text($(this).val());
  });
});

$(document).ready(function(){
  $("#etu2").on("input", function(){
    $("#recetu2").text($(this).val());
  });
});

$(document).ready(function(){
  $("#etu3").on("input", function(){
    $("#recetu3").text($(this).val());
  });
});

$(document).ready(function(){
  $("#etu4").on("input", function(){
    $("#recetu4").text($(this).val());
  });
});

$(document).ready(function(){
  $("#etu5").on("input", function(){
    $("#recetu5").text($(this).val());
  });
});

$(document).ready(function(){
  $("#langue").on("input", function(){
    $("#reclangue1").text($(this).val());
  });
});

$(document).ready(function(){
  $("#langue1").on("input", function(){
    $("#reclangue2").text($(this).val());
  });
});

$(document).ready(function(){
  $("#langue2").on("input", function(){
    $("#reclangue3").text($(this).val());
  });
});

$(document).ready(function(){
  $("#langue3").on("input", function(){
    $("#reclangue4").text($(this).val());
  });
});

$(document).ready(function(){
  $("#langue4").on("input", function(){
    $("#reclangue5").text($(this).val());
  });
});

$(document).ready(function(){
  $("#expe").on("input", function(){
    $("#recexpe").text($(this).val());
  });
});

$(document).ready(function(){
  $("#expe1").on("input", function(){
    $("#recexpe1").text($(this).val());
  });
});

$(document).ready(function(){
  $("#expe2").on("input", function(){
    $("#recexpe2").text($(this).val());
  });
});

$(document).ready(function(){
  $("#expe3").on("input", function(){
    $("#recexpe3").text($(this).val());
  });
});

$(document).ready(function(){
  $("#expe4").on("input", function(){
    $("#recexpe4").text($(this).val());
  });
});
  
$(document).ready(function(){
  $("#divers").on("input", function(){
    $("#recdivers").text($(this).val());
  });
});

$(document).ready(function(){
  $("#divers1").on("input", function(){
    $("#recdivers1").text($(this).val());
  });
});

$(document).ready(function(){
  $("#divers2").on("input", function(){
    $("#recdivers2").text($(this).val());
  });
});

$(document).ready(function(){
  $("#divers3").on("input", function(){
    $("#recdivers3").text($(this).val());
  });
});


$(document).ready(function(){
$('#dwn').click(function(){
  html2canvas(document.querySelector('#recup')).then((canvas)=>{
    let base64image=canvas.toDataURL('image/PNG');
    let pdf= new jsPDF('p','px',[750,1056]);
    pdf.addImage(base64image,'PNG',15,15,700,1000);
    pdf.save('web.pdf');
    console.log(base64image);
  });
});
});

/*var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#dwn').click(function () {
    doc.fromHTML($('#recup').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
})*/

/*async function generatePDF(){
  var downloading=document.getElementById("recup");
  var doc = new jsPDF('1','pt');
  await html2canvas(downloading,{
    allowTaint:true,
    useCors: true,
    width:1000

  }).then((canvas)=>{
    doc.addImage(canvas.toDataURl("image/png"),'PNG',5,5,500,500);
  })
  doc.save("doc.pdf");
console.log;
}*/
