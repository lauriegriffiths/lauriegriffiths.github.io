<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">Projects</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>

<main>
	<slot></slot>
</main>

<style>
	nav ul {
		list-style: none;
		display: flex;
		gap: 1rem;
	}
</style>
