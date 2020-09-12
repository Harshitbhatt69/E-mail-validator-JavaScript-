function printTime()
{
    var d= new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.inneerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
function validate()
        {
            var text1=document.getElementById("text").value;
            var regx=/^([a-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
            if(regx.test(text1))
            {
                document.getElementById("label").innerHTML="Valid";
                document.getElementById("label").style.visibility="visible";
                document.getElementById("label").style.color="green";
            }
            else
            {
                document.getElementById("label").innerHTML="Invalid";
                document.getElementById("label").style.visibility="visible";
                document.getElementById("label").style.color="red";
            }
        }