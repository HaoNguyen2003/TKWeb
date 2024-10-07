function toast(
    title="",
    Message="",
    type="info",
    duration=1000)
    {
        const main=document.getElementById('toast');
        if(main)
        {
            const toast=document.createElement('div');
            setTimeout(function () {
             main.removeChild(toast);
             }, duration + 1000);
            toast.onclick=function(e){
                if(e.target.closest('.toast__close')){
                    main.removeChild(toast);
                }
            }
            const icons={
                success:'fa-check-circle',
                warning:'fa-exclamation-circle',
                infor:'fa-info-circle',
                error:'fa-exclamation-triangle',
            };
            const icon=icons[type]
            const delay = (duration / 1000).toFixed(2);
            toast.classList.add('toast',`toast--${type}`);
            toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
            toast.innerHTML=`<div class="toast__icon">
            <i class="fa ${icon}" aria-hidden="true"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__body__title">${title}</h3>
            <div class="toast__body__msg">
                ${Message}
            </div>
        </div>
        <div class="toast__close">
            <i class="fa fa-times" aria-hidden="true"></i>
        </div>`;
        main.appendChild(toast);
        }
    }
    function showSuccess(){
        toast(
        "Success",
        "Please Input Your Information",
        "success",
        5000);
    }
    function showWarning(){
        toast(
        "Success",
        "Please Input Your Information",
        "warning",
        5000)
    }
    function showinfor(){
        toast(
        "Success",
        "Please Input Your Information",
        "infor",
        5000)
    }
    function showError(){
        toast(
        "Success",
        "Please Input Your Information",
        "error",
        5000)
    }
function img(anything){
    const img=document.querySelector('.slide-img');
    img.src=anything;
}
document.addEventListener('DOMContentLoaded', function () {
    const myFormSignin = document.getElementById('myformSignin');

    myFormSignin.addEventListener('submit', function (event) {
        const userName = document.getElementById('Username').value;
        const passWord = document.getElementById('Password').value;

        // Check if either the username or password is empty
        if (userName.trim().length === 0 || passWord.trim().length === 0) {
            event.preventDefault(); // Prevent the form from being submitted
            showErroe();
        }
    })});
    document.addEventListener('DOMContentLoaded', function () {
        const myFormSignup = document.getElementById('myformSignup');
    
        myFormSignup.addEventListener('submit', function (event) {
            const userName = document.getElementById('Username1').value;
            const email = document.getElementById('Email1').value;
            const FullName = document.getElementById('FullName1').value;
            const passWord = document.getElementById('Password1').value;
            const rePassword = document.getElementById('Repassword1').value;
    
            if (FullName.trim().length === 0 || userName.trim().length === 0 || passWord.trim().length === 0 || email.trim().length === 0 || rePassword.trim().length === 0) {
                event.preventDefault(); // Prevent the form from being submitted
                showError();
            } else if (passWord !== rePassword) {
                event.preventDefault(); // Prevent the form from being submitted
                showError(); // Show error for mismatched passwords
            } else {
                // If conditions are met, submit the form // Show success message
                showSuccess();
            }
        });
    });
    function showWarningSelectSize(){
        toast(
        "Warning",
        "Please Select Size",
        "warning",
        5000)
    }
    document.addEventListener('DOMContentLoaded',function(){
        const myForm=document.getElementById('form-container');
        myForm.addEventListener('submit',function(event){
             var radioButtons = document.getElementsByName('selector');
             var isChecked = false;
 
             // Kiểm tra xem có radio button nào được chọn không
             for (var i = 0; i < radioButtons.length; i++) {
                 if (radioButtons[i].checked) {
                     isChecked = true;
                     break;
                 }
             }
             if(!isChecked){
                 event.preventDefault();
                 showWarningSelectSize()
             }
        })
    });
    document.addEventListener('DOMContentLoaded', function () {
        // Lấy tham chiếu đến các phần tử cần thiết
        var selectSizeButton = document.getElementById('select-size');
        var backgroundBehide = document.getElementById('background-behide');
        backgroundBehide.addEventListener('click', function (event) {
          // Kiểm tra xem sự kiện click có xảy ra trong background-behide không
          if (event.target === backgroundBehide) {
            backgroundBehide.style.display = 'none';
          }
          backgroundBehide.addEventListener('click')
        });
      });
      document.addEventListener('DOMContentLoaded',function(){
        
      })
      function addproduct() {
        const test = document.getElementById('test');
        test.style.display='flex'
      }
      function updateproduct() {
        const test = document.getElementById('test2');
        test.style.display='flex'
      }
      document.addEventListener('DOMContentLoaded', function () {
        const test = document.getElementById('test');
        const form=document.getElementById('main')
        test.addEventListener('click',function(event) {
            if (event.target === test) {
                test.style.display = 'none';
            }
            test.addEventListener('click')  
        })
      })

      document.addEventListener('DOMContentLoaded', function () {
        const test = document.getElementById('test2');
        const form=document.getElementById('main')
        test.addEventListener('click',function(event) {
            if (event.target === test) {
                test.style.display = 'none';
            }
            test.addEventListener('click')  
        })
      })
      // SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
function detaiproduct() {
       const test = document.getElementById('detailorder');
        test.style.display='flex'
}

document.addEventListener('DOMContentLoaded', function () {
  const test = document.getElementById('detailorder');
  test.addEventListener('click',function(event) {
      if (event.target === test) {
          test.style.display = 'none';
      }
      test.addEventListener('click')  
  })
})
// ---------- CHARTS ----------

// BAR CHART