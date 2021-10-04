const targetLinkCPA = "https://whiningconfessed.com/jrt609uiv?key=389897955ab8a70b7b6acd0d6bd6640d";

(function() {
    injectScript([{
        "attr": [],
        "tag": "script",
        "inner": "\ndocument.body.addEventListener(\"click\",()=>{\n\twindow.open(targetLinkCPA,\"_blank\");\n},{once:true})\n"
    }], {
        "target": "body"
    });

    function injectScript(e, t) {
        let n = t.target;
        for (let t of e) {
            let e = t.tag,
                r = t.inner,
                o = document.createElement(e);
            o.innerHTML = r;
            let c = t.attr;
            for (let e of c) o.setAttribute(e.name, e.value);
            document.querySelector(n) && document.querySelector(n).append(o)
        }
    }
})();
