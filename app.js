{
    const myTime = setinterval(myTimer,1000);
    function myTimer(){
        const today = new Date();
        const displayTime = today.toLocaleDateString();
        document.getElementById("displayTime").innerHTML= displayTime;
    }
}