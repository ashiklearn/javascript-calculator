let screen = document.getElementById('show');

        buttons = document.querySelectorAll('button');

        let screenValue ="";
       
        for (item of buttons) {
            item.addEventListener('click', function (event) {
                buttonText = event.target.innerText;

                 console.log('Button text is', buttonText);
                if (buttonText == 'X') {
                    buttonText = '*';
                    screenValue += buttonText;
                    show.value = screenValue;
                    
                }
                else if (buttonText == 'C') {
                    screenValue = "";
                    show.value= screenValue;
                }
                else if (buttonText == '=') {
                    
                    screenValue = show.value = eval(screenValue);
                   
                }
                else {
                    screenValue += buttonText;
                    show.value = screenValue;
                    
                }

            })
        }
