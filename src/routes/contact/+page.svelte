<script>
	import { beforeUpdate, afterUpdate } from 'svelte';

	let contactDetails = {
		name: 'usama',
		email: '',
		phoneNo: '',
		description: '',
		country: '',
		occupations: [],
		age: ''
	};

	const handleContactForm = () => {
		console.log(contactDetails, 'here is all data');
	};
	export let data;
	console.log(data, 'hello here is data');
	let { name } = data;
	$: newName = name;

	// afterUpdate(() => {
	// 	console.log('Component has updated!');
	// });
	// beforeUpdate(() => {
	// 	console.log('Component is about to update!');
	// });
	$: handleData(data);

	const handleData = (data) => {
		console.log(data, 'here is handle data====>');
	};
</script>

<main>
	<p>
		{JSON.stringify(contactDetails, null, 8)} name : {name},,,, newName: {newName}
	</p>
	<form on:submit={handleContactForm}>
		<div>
			<label for="name"> </label>
			<input type="text" id="name" bind:value={name} />
		</div>

		<div>
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={contactDetails.email} />
		</div>

		<div>
			<label for="phone-no">Phone No:</label>
			<input type="number" id="phone-no" bind:value={contactDetails.phoneNo} />
		</div>

		<div>
			<label for="country">Country</label>

			<select id="country" bind:value={contactDetails.country}>
				<option value="">Select a country</option>
				<option value="pakistan">Pakistan</option>
				<option value="india">India</option>
				<option value="china">China</option>
			</select>
		</div>
		<div>
			<label for="occupation">Occupations :</label> <br />
			<input type="checkbox" id="student" value="student" bind:group={contactDetails.occupations} />
			<label for="student">Student</label>

			<input
				type="checkbox"
				id="employee"
				value="employee"
				bind:group={contactDetails.occupations}
			/>
			<label for="employee">Employee</label>

			<input type="checkbox" id="retired" value="retired" bind:group={contactDetails.occupations} />
			<label for="retired">Retired</label>
		</div>

		<div>
			<label for="selectAge">Select Age :</label> <br />

			<input type="radio" id="05-20" name="age" value="05-20" bind:group={contactDetails.age} />
			<label for="05-20">05-20</label>
			<input type="radio" id="20-45" name="age" value="20-45" bind:group={contactDetails.age} />
			<label for="20-45">20-45</label>
		</div>
		<div>
			<label for="description">Description:</label>
			<textarea id="phone-no" bind:value={contactDetails.description} />
		</div>

		<button>Submit</button>
	</form>
</main>
