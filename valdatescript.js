document.addEventListener(
    "DOMContentLoaded",
    function () {
        let inpBox =
            document.getElementById(
                "myInput");
        let errorMessage =
            document.getElementById(
                "message");
        let rightClickCnt =
            document.getElementById(
                "rightClickCounter");
        let copyCounter =
            document.getElementById(
                "copyCounter");
        let pasteCounter =
            document.getElementById(
                "pasteCounter");
        let rightCnt = 0;
        let copyCnt = 0;
        let pasteCnt = 0;
 
        inpBox.addEventListener(
            "contextmenu",
            function (e) {
                e.preventDefault();
                rightCnt++;
                rightClickCnt.textContent =
                    rightCnt;
                showErrorMsg(
                    "Right-clicking is disabled."
                );}
        );
 
        inpBox.addEventListener(
            "copy",
            function (e) {
                e.preventDefault();
                copyCnt++;
                copyCounter.textContent =
                    copyCnt;
                showErrorMsg(
                    "Copying is disabled."
                );}
        );
 
        inpBox.addEventListener(
            "paste",
            function (e) {
                e.preventDefault();
                pasteCnt++;
                pasteCounter.textContent =
                    pasteCnt;
                showErrorMsg(
                    "Pasting is disabled."
                );}
        );

        
        function showErrorMsg(message) {
            errorMessage.innerText =
                message;
            errorMessage.style.display =
                "block";

            setTimeout(function () {
                errorMessage.style.display =
                    "none";
            }, 2000);}
    }
);
