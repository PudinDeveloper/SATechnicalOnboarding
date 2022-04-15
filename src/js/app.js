btn = document.getElementById('contact');

const contactMLSA = () => {
    Swal.fire({
        icon: 'info',
        title: 'MLSA Mail',
        text: 'diego.gentner@studentambassadors.com',
        footer: '<a href="mailto:diego.gentner@studentambassadors.com">Click here to open mailbox</a>'
      })
}

btn.addEventListener('click', contactMLSA);