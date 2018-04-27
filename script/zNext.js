/**
 *前台框架
 */




function start(ia) {
api.addEventListener({
    name: 'zstart1'
}, function(ret, err){
  zzysend('zstart00')
});


  api.addEventListener({
      name: 'zstart0'
  }, function(ret, err){
    if(ret.value.key.length == 0){
      zzysave('zstart1','cc',{
        "deviceId": api.deviceId
      })
    }else {
      zzyalert('aa',ret.value.key[0][ia[0][0]]);
      var zlen = ia.length;
      for (var i = 0; i < zlen; i++) {
        if (ret.value.key[0][ia[i][0]] ==null) {
          ia[i][1]= ""
        }else {
          ia[i][1] = ret.value.key[0][ia[i][0]]
        }

      };
      var cc = ia
  zzysend('svalue',{'key': cc})
      // zzyalert('bb',cc)
    }
  });
api.addEventListener({
    name: 'zstart00'
}, function(ret, err){
zget('zstart0','cc',{'deviceId': api.deviceId})
});

zzysend('zstart00');


}








/**
 *、循环使用zlist将数据数组转换成 html代码
 *
 */

function forph(ia) {
    let aa = new Array;
    // zzyalert('cc',ia);
    let ilen = ia.length;
    let cc = "";
    for (var i = 0; i < ilen; i++) {
        aa[i] = zlist(ia[i])
    };
    for (var i = 0; i < ilen; i++) {
        cc += aa[i]
    };
    // ia = ia.join("")
    return (cc);

}



///////////////////////////////////////////////////////////////////////


/////////对html代码渲染//////////////////////////////////////////////////

function zzyhtml(iid, ia) {
  zzyalert('sss',forph(ia))
    document.getElementById(iid).innerHTML = forph(ia)
}

///////////////////////////////////////////////////////////////////////

//
// 获取输入的数据


function zzyvalue(ia) {
    let ilen = ia.length;
    let bb = {}
    for (var i = 0; i < ilen; i++) {
        ia[i][1] = document.getElementById("input" + ia[i][0] + "0").value;
    };
  var aa = ia
    return (aa)
}
//////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////
function zlist(ia) {
    var zlist = {};
    var aa;
    var bb = [];
    var sss = [];
    zzyalert('aa',ia);
    var alen = ia.length;
    var alen0 = (ia.length - 1);

    zlist.item = [];
    zlist.label = [];
    zlist.inner = [];
    zlist.title = [];
    zlist.iteminput = [];
    zlist.input = [];
    zlist.btn = [];
    zlist.cbtn = [];
    zlist.item.id = [];
    zlist.label.id = [];
    zlist.inner.id = [];
    zlist.title.id = [];
    zlist.iteminput.id = [];
    zlist.input.id = [];
    zlist.btn.id = [];
    zlist.cbtn.id = [];

    for (var i = 0; i < alen0; i++) {

        zlist.item.id[i] = "item" + ia[0] + i;
        zlist.label.id[i] = "label" + ia[0] + i;
        zlist.inner.id[i] = "inner" + ia[0] + i;
        zlist.title.id[i] = "title" + ia[0] + i;
        zlist.iteminput.id[i] = "iteminput" + ia[0] + i;
        zlist.input.id[i] = "input" + ia[0] + i;
        zlist.btn.id[i] = "btn" + ia[0] + i;
        zlist.cbtn.id[i] = "cbtn" + ia[0] + i;

        zlist.item[i] = '<li id = ' + zlist.item.id[i] + ' class="aui-list-item">';
        zlist.label[i] = '<div id = ' + zlist.label.id[i] + ' class="aui-list-item-label aui-ellipsis-2" >';
        zlist.inner[i] = ' <div id = ' + zlist.inner.id[i] + ' class="aui-list-item-inner" >';
        zlist.title[i] = '<div id = ' + zlist.title.id[i] + ' class="aui-list-item-title">';
        zlist.iteminput[i] = '<div id = ' + zlist.iteminput.id[i] + ' class="aui-list-item-input">';
        zlist.input[i] = '<input id = ' + zlist.input.id[i] + ' type="text" placeholder=' + ia[i + 2] + ' value = '+ia[i + 1]+' > ';
        zlist.btn[i] = '<div id = ' + zlist.btn.id[i] + ' class="aui-btn aui-btn-outlined aui-btn-default " onclick = " fzclick('+ia[0]+')" >';
        zlist.cbtn[i] = ' <div id = ' + zlist.cbtn.id[i] + ' class="aui-list-item-inner  aui-list-item-center"  onclick = " fzclick('+ia[0]+')">';


        // zzyalert('aa',zlist.cbtn.id[i]);

    };
    var dend = '</div>';
    var lend = '</li>';

    if (ia[alen - 1] === "inner") {
        if (3 === alen) {
            aa = zlist.item[0] +
                zlist.label[0] +
                ia[0] +
                dend +
                zlist.inner[0] +
                zlist.title[1] +
                ia[1] +
                dend +
                dend +
                zlist.label[1] +
                dend +
                lend;

            bb = [
                zlist.item.id[0],
                zlist.label.id[0],
                zlist.inner.id[0],
                zlist.title.id[1],
                zlist.label.id[1]
            ];
            zzysend('fip', {
                "id": bb,
                "date": ia[0]
            });
            return (aa);
        } else {
            alert('出错，需要3个参数');
        }

    } else if (ia[alen - 1] === "input") {
        if (4 === alen) {
            aa = zlist.item[0] +
                zlist.inner[0] +
                zlist.label[0] +
                ia[0] +
                dend +
                zlist.iteminput[0] +
                zlist.input[0] +
                dend +
                dend +
                zlist.label[1] +
                dend +
                lend;

            bb = [
                zlist.item.id[0],
                zlist.inner.id[0],
                zlist.label.id[0],
                zlist.iteminput.id[0],
                zlist.input.id[0],
                zlist.label.id[1]
            ];



            // zzyalert('ss',bb[0]);
            zzysend('fip', {
                "id": bb,
                "date": ia[0]
            });
            return (aa);


        } else {
            alert('出错，需要4个参数');
        }

    } else if (ia[alen - 1] === "cbtn") {
        if (2 === alen) {
            aa = zlist.item[0] +
                zlist.cbtn[0] +
                ia[0] +
                dend +
                lend;
            bb = [
                zlist.item.id[0],
                zlist.cbtn.id[0],
            ];

            zzysend('fip', {
                "id": bb,
                "date": ia[0]
            });
            return (aa);
        } else {
            alert('出错，需要2个参数');
        }

    } else if (ia[alen - 1] === "inputbtn") {
        if (4 === alen) {
            aa = zlist.item[0] +
                zlist.inner[0] +
                zlist.label[0] +
                ia[0] +
                dend +
                zlist.iteminput[0] +
                zlist.input[0] +
                dend +
                dend +
                zlist.label[1] +
                zlist.btn[0] +
                '提交' +
                dend +
                dend +
                lend;
            bb = [
                zlist.item.id[0],
                zlist.inner.id[0],
                zlist.label.id[0],
                zlist.iteminput.id[0],
                zlist.input.id[0],
                zlist.label.id[1],
                zlist.btn.id[0],
            ];
            // zzyalert('ss',bb[0]);
            zzysend('fip', {
                "id": bb,
                "date": ia[0]
            });
            return (aa);
        } else {
            alert('出错，需要4个参数');
        }
    } else {
        api.addEventListener({
            name: 'zlisti'
        }, function(ret, err) {
            return (ret.vlaue)
        });
        zzysend('zlisto', ia)
    }
};
/////////////////////////////////////////////////////////////////////////


/**
 *
 */     

////////////////////////////////////////////////////////////////////////

function zsfontsize(iid, ia, ib) {
    var alen = ia.length;
    var cc;


    var zkey = [
        // ['min','max','fron','lineh'],
        [0, 8, 0.8, 2.2],
        [8, 15, 0.6, 1.1],
        [15, 50, 0.4, 1.1]
    ];
    var dd;
    if (ib === 'zkey') {
        dd = zkey
    } else {
        dd = ib
    };
    var blen = dd.length;
    if ('object' !== typeof(iid)) {
        cc = eval("(" + iid + ")")
    } else {
        cc = iid
    };
    // zzyalert('cc', cc.offsetHeight + "a" + cc.offsetWidth)

    for (var i = 0; i < blen; i++) {
        // zzyalert('dd',dd);
        if (alen >= dd[i][0] && alen < dd[i][1]) {
            // zzyalert('dd',dd[i][2]);
            cc.style.fontSize = dd[i][2] + "rem";
            cc.style.lineHeight = dd[i][3] + "rem";

        }
    }


}

/////////////////////////////////////////////////////////////////////////////////

// function zclicksend(ia) {
//   zzyalert('fzclick',ia)
// }

function fip(iz) {
    var zzs = [];
    api.addEventListener({
        name: 'fip'
    }, function(ret, err) {
        // zzyalert('fip',ret.value.key);
        aid = [];
        aid = ret.value.id;
        adate = ret.value.date;
        // zzyalert('date',adate)
        var zaa = [];
        var alen = aid.length;
        for (var i = 0; i < alen; i++) {

            if (
                aid[i].indexOf('label') === 0 &&
                document.getElementById(aid[i]).innerHTML.indexOf('div') === -1 &&
                document.getElementById(aid[i]).innerHTML !== "") {
                // zzyalert('aid', document.getElementById(aid[i]).innerHTML);
                var zn = document.getElementById(aid[i]).innerHTML;
                zsfontsize(aid[i], zn, 'zkey')
            }
        }
    });


function zinput(ia,ib) {
var alen = ia.length;
var blen = ib.length;
for (var i = 0; i < blen; i++) {
  if(ib[i][0] !== undefind){
    ib[i][1] = a[ib[i][0]
  }
}
}


    api.addEventListener({
        name: 'fzclick'
    }, function(ret, err){
      // zzyalert('2222222222222222')
if(ret.value.key=='btn1'){

var bb = {}
for (var i = 0; i < a.length; i++) {
  bb[a[i][0]] = a[i][1];
};

zzyalert('bb',bb)
// zzygetidsave('fpas', 'cc', {'deviceId':api.deviceId},bb);
// zzysend('frequest',{'arr':a,'obj':bb});
// gizss(bb);ss

}

    });
};

function fzclick(ia) {
  zzyalert('ooo',zzyvalue(a))
  zzysend('fzclick',{"key":ia})
};



//
// function zfontsize(ia, ib) {
//     var zlen = (ia.length);
//     for (var i = 0; i < zlen; i++) {
//         var cc = 'label' + ia[i][0] + 0;
//         zsfontsize(cc, ia[i][0], ib)
//     };
// };




// function zfontsized(iid, ia) {
//     var ilen = ia.length
//     if (ilen >= 8 && ilen < 15) {
//         iid.style.lineHeight = 1 + 'rem'
//         iid.style.fontSize = 0.8 + "rem"
//     } else if (ilen >= 15 && ilen < 30) {
//         iid.style.fontSize = 0.6 + "rem"
//     } else if (ilen >= 30) {
//         iid.style.fontSize = 0.4 + "rem"
//     } else if (ilen < 8) {
//         iid.style.fontSize = 1 + "rem"
//             // zzyalert('aa',iid);
//     }
// }
