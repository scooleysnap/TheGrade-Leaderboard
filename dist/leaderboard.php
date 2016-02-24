<!DOCTYPE html>
<html lang="en" ng-app="TheGrade.Leaderboard">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="assets/css/leaderboard.css">
	<script src="assets/js/leaderboard.js"></script>
</head>
<body ontouchstart>
	<div class="page-wrap" ng-view></div>
</body>

<script type="text/ng-template" id="leaderboard-view">	
	<title-bar show-filters="showFilters()" cities-are-up="citiesAreUp()" active-type="activeType" active-city="activeCity"></title-bar>
	<div class="scroll-wrap">
		<ul class="leaderboard">
			<leaderboard-item ng-repeat="user in users"></leaderboard-item>
		</ul>
	</div>
	<tab-bar active-type="activeType" active-gender="activeGender"></tab-bar>
	<filter-view filters-are-visible="filtersAreVisible" hide-filters="hideFilters()" active-type="activeType" active-filters="activeFilters"></filter-view>
	<city-list active-type="activeType" active-city="activeCity" cities-are-up="citiesAreUp()"></city-list>
</script>
<script type="text/ng-template" id="title-bar">
	<header class="title-bar title-bar-fixed">
		<div class="button button-close"><span class="icon icon-x"></span></div>
		<h1 class="title-bar-title">{{getTitle()}}</h1>
		<div class="button button-radius button-ghost button-filter" ng-class="{'is-disabled': disableFilterButton()}" ng-click="showFilters()">Filter <span class="icon icon-settings"></span></div>
	</header>
</script>
<script type="text/ng-template" id="leaderboard-item">
	<li class="leaderboard-row" ng-click="goToProfile()" user="user">
		<div class="leaderboard-item leaderboard-count"></div>
		<div class="leaderboard-item leaderboard-photo"><img ng-src="{{user.img}}" width-"53" height="94" alt=""></div>
		<div class="leaderboard-item leaderboard-stats">
			<span class="leaderboard-stats-name">{{user.first_name}}</span>
			<span class="leaderboard-stats-likes">{{user.total_weekly_likes}}</span>
		</div>
		<div class="leaderboard-item leaderboard-grade"><span class="grade-circle" data-grade="{{user.grade_letter}}"></span></div>
	</li>
</script>
<script type="text/ng-template" id="tab-bar">
	<nav class="tab-bar">
		<tab-bar-item-type ng-repeat="type in types"type="type"></tab-bar-item-type>
		<div class="tab-bar-item">
			<span class="tab-bar-divider"></span>
		</div>
		<tab-bar-item-gender ng-repeat="gender in genders" gender="gender"></tab-bar-item-gender>
	</nav>
</script>
<script type="text/ng-template" id="tab-bar-item-type">
	<div class="tab-bar-item" ng-click="makeActiveType()" ng-class="{'is-active': isActiveType()}">
		<span class="icon icon-{{type.type}}"></span>
		<span class="tab-bar-item-label">{{type.label}}</span>
	</div>
</script>
<script type="text/ng-template" id="tab-bar-item-gender">
	<div class="tab-bar-item" ng-click="makeActiveGender()" ng-class="{'is-active': isActiveGender()}">
		<span class="icon icon-{{gender.label | lowercase}}"></span>
		<span class="tab-bar-item-label">{{gender.label}}</span>
	</div>
</script>
<script type="text/ng-template" id="city-list">
	<div class="city-select" ng-class="{'is-up': citiesAreUp()}" ng-show="citiesAreVisible()">
		<div class="city-select-toggle" ng-click="toggleCityList()">Select City</div>
		<h2 class="city-select-header">Select a city to view its leaderboard</h2>
		<div class="city-list-scroll-wrap">
			<ul class="city-list">
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
				<li class="city-list-item" ng-click="setActiveCity('chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('new_york')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('los_angeles')">Los Angeles</li>
			</ul>
			{{activeCity}}
		</div>
	</div>
</script>
<script type="text/ng-template" id="filter-view">
	<div class="filters-view" ng-class="{'is-visible': filtersAreVisible}">
		<header class="title-bar">
			<h1 class="title-bar-title">Filters</h1>
		</header>
		<h1 class="filters-view-header">Tap a filter to select.</h1>
		<form action="" name="filtersForm">
			<div class="filter filter--distance" ng-hide="hideDistance()" ng-class="{'is-active': isActive('radius_mi')}">
				<div class="filter-label">Distance: {{filters.radius_mi.value}}</div>
				<div class="filter-wrap">
					<div class="filter-control" >
						<div class="filter-select">
							<select name="radius_mi" ng-focus="activateFilter('radius_mi')" id="radius_mi" ng-model="filters.radius_mi.value">
								<option value="2">2 Miles</option>
								<option value="5">5 Miles</option>
								<option value="10">10 Miles</option>
								<option value="20">20 Miles</option>
								<option value="40">40 Miles</option>
								<option value="80">80 Miles</option>
								<option value="200">200 Miles</option>
								<option value="500">500 Miles</option>
								<option value="1000">1000 Miles</option>
							</select>
						</div>
					</div>
					<div class="filter-toggle-wrap">
						<div class="filter-toggle" ng-click="toggleFilter('radius_mi')"></div>
					</div>
				</div>
			</div>
			<div class="filter filter--age" ng-class="{'is-active': isActive('age_min') && isActive('age_max')}">
				<div class="filter-label">Age: Min. Age: {{filters.age_min.value}}/ Max Age: {{filters.age_max.value}}</div>
				<div class="filter-wrap">
					<div class="filter-control">
						<div class="filter-input filter-input-min">
							<input type="number" pattern="\d*" min="18" max="100" name="age_min" id="age_min" ng-focus="activateFilter('age_min'); activateFilter('age_max')" ng-model="filters.age_min.value">
						</div>
						<div class="filter-input filter-input-max">
							<input type="number" pattern="\d*" min="18" max="100" name="age_max" id="age_max" ng-focus="activateFilter('age_min'); activateFilter('age_max')" ng-model="filters.age_max.value">
						</div>
					</div>
					<div class="filter-toggle-wrap">
						<div class="filter-toggle" ng-click="toggleFilter('age_min'); toggleFilter('age_max')"></div>
					</div>
				</div>
			</div>
			<div class="filter filter--occupation" ng-class="{'is-active': isActive('occupation')}">
				<div class="filter-label">Occupation</div>
				<div class="filter-wrap">
					<div class="filter-control">
						<div class="filter-select">
							<select name="occupation" ng-model="filters.occupation.value" ng-focus="activateFilter('occupation')" id="occupation">
								<option value="">Select an occupation</option>
								<option value="2">2 Miles</option>
								<option value="5">5 Miles</option>
								<option value="10">10 Miles</option>
								<option value="20">20 Miles</option>
								<option value="40">40 Miles</option>
								<option value="80">80 Miles</option>
								<option value="200">200 Miles</option>
								<option value="500">500 Miles</option>
								<option value="1000">1000 Miles</option>
							</select>
						</div>
					</div>
					<div class="filter-toggle-wrap">
						<div class="filter-toggle" ng-click="toggleFilter('occupation')"></div>
					</div>
				</div>
			</div>
			<div class="filter filter--religion" ng-class="{'is-active': isActive('religion')}">
				<div class="filter-label">Religion</div>
				<div class="filter-wrap">
					<div class="filter-control">
						<div class="filter-select">
							<select name="religion" ng-focus="activateFilter('religion')" ng-model="filters.religion.value" id="religion">
								<option value="">Select a religion</option>
								<option value="agnostic">Agnostic</option>
								<option value="atheist">Atheist</option>
								<option value="buddhist">Buddhist</option>
								<option value="christian_catholic">Christian Catholic</option>
								<option value="christian_mormon">Christian Mormon</option>
								<option value="christian_protestant">Christian Protestant</option>
								<option value="christian_other">Christian Other</option>
								<option value="hindu">Hindu</option>
								<option value="jewish">Jewish</option>
								<option value="muslim">Muslim</option>
								<option value="spiritual">Spiritual</option>
								<option value="other">Other</option>
							</select>
						</div>
					</div>
					<div class="filter-toggle-wrap">
						<div class="filter-toggle" ng-click="toggleFilter('religion')"></div>
					</div>
				</div>
			</div>
			{{activeFilters}}
			<div class="filters-view-buttons">
				<div class="filters-view-button-wrap">
					<div class="button button-radius button-ghost button-cancel" ng-click="cancelFilters()">{{numActiveFilters > 0 ? "Clear" : "Cancel"}}</div>
				</div>
				<div class="filters-view-button-wrap">
					<div class="button button-radius button-fill button-apply" ng-class="{'is-disabled': numActiveFilters === 0}" ng-click="pushActiveFilters()">Apply</div>
				</div>
			</div>
		</form>
	</div>
</script>
</html>