const Validator = function(options) {
	console.log(options.id)	

	const form = document.getElementById(options.id),
		elementsForm = form.elements.filter(item => item.tagName !== 'BUTTON');
	console.log(form.elements);

	const showError = (elem) => {
		elem.classList.remove('validator_success');
		elem.classList.add('validator_error');
		const errorDiv = document.createElement('div');
		errorDiv.textContent = "Ошибка заполнения";
		errorDiv.classList.add('error-message');
		elem.insertAdjacentElement('afterend', errorDiv);
		
	};

	const showSuccess = (elem) => {
		elem.classList.remove('validator_error');
		elem.classList.add('validator_success');
		if(elem.nextElementSinbling.classList.contains('error-message')) {
			elem.nextElementSinbling.remove();
		}
	};
};