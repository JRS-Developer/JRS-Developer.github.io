document.addEventListener('DOMContentLoaded', () => {
	const ContactForm = document.getElementById('contact-form');
	ListenForm(ContactForm);
});

const ListenForm = (ContactForm) => {
	ContactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		SendForm(ContactForm);
	});
};

const SendForm = async (ContactForm) => {
	try {
		const MyFormData = new FormData(ContactForm);
		const Data = await fetch(ContactForm.action, {
			method: ContactForm.method,
			body: MyFormData,
		});
		const Response = await Data.json();

		Response.success
			? ShowFormMessage('Email sent successfully')
			: ShowFormMessage('An error has ocurred', true);
	} catch (error) {
		console.log(`Hay un error mano: ${error}`);
		ShowFormMessage('An error has ocurred', true);
	}
};

const ShowFormMessage = (message, submitError = false) => {
	const FormButton = document.getElementById('form__button');
	const originalButtonClass = FormButton.className;
	const originalButtonValue = FormButton.value;
	FormButton.value = message;

	submitError
		? FormButton.classList.add('form__button--error')
		: FormButton.classList.add('form__button--success');

	setTimeout(function () {
		ResetButton(FormButton, originalButtonValue, originalButtonClass);
	}, 5000);
};

const ResetButton = (FormButton, originalButtonValue, originalButtonClass) => {
	FormButton.className = originalButtonClass;
	FormButton.value = originalButtonValue;
};
