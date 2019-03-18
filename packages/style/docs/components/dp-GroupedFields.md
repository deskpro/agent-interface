---
title: Grouped by Fields
---

<h4> Example 1 </h4>
```html @preview
<div class="dp-Group-container demo-cog demo-menu">
	<div class="dp-Group-items">
		<span class="dp-Badge Badge--group-filter">
			All <span class="dp-Num">80</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Sales <span class="dp-Num">11</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Support <span class="dp-Num">25</span>
			<button class="dp-Arrow"></button>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Regulated <span class="dp-Num">34</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			It <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Support <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			It <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Regulated <span class="dp-Num">34</span>
		</span>

		<span class="dp-Badge Badge--group-filter is-active">
			Sales <span class="dp-Num">11</span>
			<button class="dp-Arrow is-active">
				<ul class="dp-Menu">
					<li>
						<span class="dp-Group-item">
							<span class="dp-Icon Icon--enter"></span>
							<span class="dp-Badge Badge--group-filter">
								Licenses <span class="dp-Num">8</span>
							</span>
						</span>
					</li>
					<li>
						<span class="dp-Group-item">
							<span class="dp-Icon Icon--enter"></span>
							<span class="dp-Badge Badge--group-filter">
								Customers <span class="dp-Num">3</span>
							</span>
						</span>
					</li>
				</ul>
			</button>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Regulated <span class="dp-Num">34</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Sales <span class="dp-Num">11</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			It <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Hr <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Support <span class="dp-Num">25</span>
			<button class="dp-Arrow"></button>
		</span>
	</div>
</div>
```

<h4> Example 2 </h4>
```html @preview
<div class="dp-Group-container demo-cog demo-menu">
	<div class="dp-Group-items">
		<span class="dp-Badge Badge--group-filter">
			All <span class="dp-Num">80</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Sales <span class="dp-Num">11</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Support <span class="dp-Num">25</span>
			<button class="dp-Arrow"></button>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Regulated <span class="dp-Num">34</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			It <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Support <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			It <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Regulated <span class="dp-Num">34</span>
		</span>

		<span class="dp-Badge Badge--group-filter is-active">
			Sales <span class="dp-Num">11</span>
			<span class="dp-Arrow is-active">
				<ul class="dp-Menu">
					<li>
						<span class="dp-Group-item">
							<span class="dp-Icon Icon--enter"></span>
							<span class="dp-Badge Badge--group-filter is-active">
								Licenses <span class="dp-Num">8</span>
								<button class="dp-Arrow"></button>
							</span>
						</span>
					</li>
					<li>
						<span class="dp-Group-item">
							<span class="dp-Icon Icon--enter"></span>
							<span class="dp-Badge Badge--group-filter">
								Customers <span class="dp-Num">3</span>
								<button class="dp-Arrow"></button>
							</span>
						</span>
					</li>
				</ul>
			</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Regulated <span class="dp-Num">34</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Sales <span class="dp-Num">11</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			It <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Hr <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Support <span class="dp-Num">25</span>
			<button class="dp-Arrow"></button>
		</span>
	</div>
</div>
```

<h4> Example 3 </h4>
```html @preview
<div class="dp-Group-container demo-cog demo-menu">
	<div class="dp-Group-items">
		<span class="dp-Badge Badge--group-filter">
			All <span class="dp-Num">80</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Sales <span class="dp-Num">11</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Support <span class="dp-Num">25</span>
			<button class="dp-Arrow"></button>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Regulated <span class="dp-Num">34</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			It <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Support <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			It <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Regulated <span class="dp-Num">34</span>
		</span>

		<span class="dp-Badge Badge--group-filter Badge--extended is-active">
			Sales 
			<span class="dp-Num">11</span>

			<span class="dp-Num-extended">
				<span><span class="dp-Num">1</span>/4</span>
				<button class="dp-Arrow is-active">

					<ul class="dp-Menu">
						<li>
							<span class="dp-Group-item">
								<span class="dp-Icon Icon--enter"></span>
								<span class="dp-Badge Badge--group-filter">
									Licenses <span class="dp-Num">8</span>
								</span>
							</span>
						</li>

						<li class="dp-Group-list">
							
							<span class="dp-Group-item">
								<span class="dp-Icon Icon--enter"></span>
								<span class="dp-Badge Badge--group-filter">
									Customers <span class="dp-Num">3</span>
								</span>
							</span>

							<ul class="dp-Group-sublist">
								<li>
									<span class="dp-Group-item">
										<span class="dp-Icon Icon--enter"></span>
										<span class="dp-Badge Badge--group-filter">
											New <span class="dp-Num">2</span>
										</span>
									</span>
								</li>
								<li>
									<span class="dp-Group-item">
										<span class="dp-Icon Icon--enter"></span>
										<span class="dp-Badge Badge--group-filter">
											Existing <span class="dp-Num">1</span>
										</span>
									</span>
								</li>
							</ul>
						</li>
					</ul>
				</button>
			</span>

		</span>

		<span class="dp-Badge Badge--group-filter">
			Regulated <span class="dp-Num">34</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Sales <span class="dp-Num">11</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			It <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Hr <span class="dp-Num">25</span>
		</span>

		<span class="dp-Badge Badge--group-filter">
			Support <span class="dp-Num">25</span>
			<button class="dp-Arrow"></button>
		</span>
	</div>
</div>
```
