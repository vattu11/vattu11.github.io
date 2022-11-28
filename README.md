
<h1 style="font-family:verdana" style="font-size:30px" style="color:red"> PENTAKILL </h1>
<video idth="200" height="200" src="Veigar penta.webm" controls></video>



<button id="btn">Click Here!</button>

<p>
    Button Clicked <span 
    id="display">0</span> Times
</p>
  
<script type="text/javascript">
        var count = 0;
        var btn = document.getElementById("display");
        var disp = document.getElementById("display");

        btn.onclick = function () {
            count++;
            disp.innerHTML = count;
        }
    </script>
