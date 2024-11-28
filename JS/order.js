

const form = document.getElementById('myForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const first_name = document.getElementById('Firstname');
            const last_name = document.getElementById('Lastname');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const phone = document.getElementById('Phone');
            const address = document.getElementById('Address');
            const delivery = document.getElementById('Delivery');
            const shop = document.getElementById('Shop');
            const city = document.getElementById('City');
            const checkbox = document.getElementById('gridCheck');

            const first_name_error = document.getElementById('Firstname_error');
            const last_name_error = document.getElementById('Lastname_error');
            const email_error = document.getElementById('email_error');
            const password_error = document.getElementById('password_error');
            const phone_error = document.getElementById('phone_error');
            const address_error = document.getElementById('address_error');
            const delivery_error = document.getElementById('Delivery_error');
            const shop_error = document.getElementById('shop_error');
            const city_error = document.getElementById('city_error');
            const checkbox_error = document.getElementById('checkbox_error');
    
            first_name_error.textContent = '';
            last_name_error.textContent = '';
            email_error.textContent = '';
            password_error.textContent = '';
            phone_error.textContent = '';
            address_error.textContent = '';
            delivery_error.textContent = '';
            shop_error.textContent = '';
            city_error.textContent = '';
            

        
            if (first_name.value.trim() === '') {
                first_name_error.textContent = 'First Name is required';
            }

            if (last_name.value.trim() === '') {
                last_name_error.textContent = 'Last Name is required';
            }

            var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (!email.value.match(email_check)) {
                email_error.textContent = 'Valid Email is required';
            }

            if (password.value.length < 6) {
                password_error.textContent = 'Password must be at least 8 characters';
            }

            if (phone.value.trim() === '') {
                phone_error.textContent = 'Phone Number is required';
            }

            if (address.value.trim() === '') {
                address_error.textContent = 'Address is required';
            }

            if (delivery.value.trim() === '') {
                delivery_error.textContent = 'Delivery Time is required';
            }

            if (shop.value.trim() === '') {
                shop_error.textContent = 'Shopping Address is required';
            }

            if (city.value.trim() === '') {
                city_error.textContent = 'City is required';
            }

            if (!checkbox.checked) {
                checkbox_error.textContent = 'Please confirm';
            }


            
    if (
        first_name.value.trim() !== '' &&
        last_name.value.trim() !== '' &&
        email.value.match(email_check) &&
        password.value.length >= 6 &&
        phone.value.trim() !== '' &&
        address.value.trim() !== '' &&
        delivery.value.trim() !== '' &&
        shop.value.trim() !== '' &&
        city.value.trim() !== '' &&
        checkbox.checked
    ) {
        showSuccessMessage();
        form.reset();
    }
});

function showSuccessMessage() {
    alert('Form submitted successfully!. Please click button payment for checked out.');
}