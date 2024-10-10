<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/articles">Articles</a></li>
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
