

            const  loginBtn =document.getElementById("login");
            loginBtn.addEventListener("click",function(){

                const loginForm =document.getElementById("login-form");
                loginForm.style.display ="none";

                const transaction =document.getElementById("transaction-area");
                transaction.style.display ="block";

            

            });

            //addEvent for deposit

            const depositBtn =document.getElementById("depositTK");
                depositBtn.addEventListener("click",function(){
                 //   alert('ok');

                    const depositAll = document.getElementById("depositAmount").value;
                    const depositNumber = parseFloat(depositAll);

                    //have to show this total in innerHtml

                    updateSpan("showDeposit",depositNumber);
                    updateSpan("showBalance",depositNumber);
                    //empty the input field
                    document.getElementById("depositAmount").value ="";
                    
            });

            //deposit & savings in same tim



            const withdrawBtn =document.getElementById("withdrawtk");
            withdrawBtn.addEventListener("click",function(){
              //  console.log('ok');

                const withDrawAll =document.getElementById("withDrawAmount").value;
                const withDrawNumber =parseFloat(withDrawAll);
                const showWithdraws =document.getElementById("showWithdraw").innerText;
                const withDrawAmounts =parseFloat(showWithdraws);
                const totalWithdraw = withDrawNumber + withDrawAmounts;
              //  alert(totalWithdraw);
                document.getElementById("showWithdraw").innerText =totalWithdraw;

                const showBalance =document.getElementById("showBalance").innerText;
                const balanceNumber =parseFloat(showBalance);
                const reduceBalance =balanceNumber -withDrawNumber;
                document.getElementById("showBalance").innerText =reduceBalance;
                

                document.getElementById("withDrawAmount").value="";

            });

                function updateSpan(id,depositNumber){

                const showBalance =document.getElementById(id).innerText;
                const balanceNo = parseFloat(showBalance);
                const totalBalance =depositNumber +balanceNo;
                document.getElementById(id).innerText =totalBalance;
                }

                // function reduceSpan(id,withDrawNumber){

                //     const showBalance =document.getElementById()
                // }

               