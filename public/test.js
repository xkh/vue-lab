
(function(){
    window.addEventListener('error', function (event){
        // 过滤js error
        const target = event.target;
        const isElementTarget = target instanceof HTMLScriptElement 
        || target instanceof HTMLLinkElement 
        || target instanceof HTMLImageElement;
        if(isElementTarget){
            // 上报资源地址
            const {src, href, baseURI, ownerDocument} = target;
            const {lastModified=''} = ownerDocument;
            const params = {
                url: src||href,
                baseURI,
                lastModified
            }
            console.log('uuu....',params);
        }
    }, true);
    
})();