//const _0x5837=['none','data-caption','toLowerCase','keyup','keyEvent','getAttribute','display','searchEvent','querySelectorAll','links','style','querySelector','value','target','search'];(function(_0x6a942d,_0x583795){const _0x58155f=function(_0x5361ed){while(--_0x5361ed){_0x6a942d['push'](_0x6a942d['shift']());}};_0x58155f(++_0x583795);}(_0x5837,0x7f));const _0x5815=function(_0x6a942d,_0x583795){_0x6a942d=_0x6a942d-0x0;let _0x58155f=_0x5837[_0x6a942d];return _0x58155f;};const handleSearch=(_0x36e785,_0x56d539)=>{const _0x257686=_0x36e785[_0x5815('0x6')][_0x5815('0x5')][_0x5815('0xa')]();_0x56d539['forEach'](_0x14b59e=>{let _0x3dba43=_0x14b59e[_0x5815('0xd')](_0x5815('0x9'))[_0x5815('0xa')]();_0x3dba43['includes'](_0x257686)||!_0x257686?_0x14b59e[_0x5815('0x3')][_0x5815('0xe')]='':_0x14b59e['style'][_0x5815('0xe')]=_0x5815('0x8');});};class Filter{constructor(_0x59f7e0,_0x140b2a){this[_0x5815('0x2')]=document[_0x5815('0x1')]('['+_0x140b2a+']');this[_0x5815('0xc')]=document[_0x5815('0x4')]('#'+_0x59f7e0)['addEventListener'](_0x5815('0xb'),_0x568d4e=>{handleSearch(_0x568d4e,this[_0x5815('0x2')]);});this[_0x5815('0x0')]=document[_0x5815('0x4')]('#'+_0x59f7e0)['addEventListener'](_0x5815('0x7'),_0x2df773=>{handleSearch(_0x2df773,this[_0x5815('0x2')]);});}}

const search = document.getElementById('search');

search.addEventListener('keyup', e => {

    const anchor = document.querySelectorAll('.gallery a');
    let currentValue = e.target.value.toLowerCase();
    //let caption = document.getAttribute('data-caption');
    
    anchor.forEach(anchor => {
        
        const caption = anchor.getAttribute('data-caption');
        
        if (caption.toLowerCase().includes(currentValue)){
            anchor.style.display = 'block';
        } else {
            anchor.style.display = 'none';
        }
    });

    // caption.forEach(caption => {
    //     if (caption.textContent.toLowerCase().includes(currentValue)) {
    //         caption.style.display = 'block';
    //     } else {
    //         caption.style.display = 'none';
    //     }
    // });
    // console.log(currentValue);
});