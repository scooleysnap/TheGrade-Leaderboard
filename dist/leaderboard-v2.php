<?php 

//require_once __DIR__ . '/../../bootstrap.php';

 ?>
<!DOCTYPE html>
<html lang="en" ng-app="TheGrade.Leaderboard">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="css/leaderboard.css">
</head>
<body ontouchstart>
	<div class="page-wrap" ng-view></div>
</body>

<script type="text/ng-template" id="leaderboard-view">
	<title-bar></title-bar>
	
	<city-list></city-list>
	<tab-bar active-type="activeType" cities-are-up="citiesAreUp" active-gender="activeGender"></tab-bar>
	<filter-view></filter-view>
</script>
<script type="text/ng-template">
<title-bar show-filters="showFilters()" cities-are-up="citiesAreUp()" active-type="activeType" active-city="activeCity"></title-bar>
<div class="scroll-wrap">
	<ul class="leaderboard" ng-class="{'is-loading': loading}">
		<leaderboard-item ng-repeat="user in users"></leaderboard-item>
	</ul>
	<div class="no-results" ng-show="noResults()">
		<h1 class="no-results-header">No Results!</h1>
		<p class="no-results-copy">Try Changing your filter settings, or select a different leaderboard</p>
	</div>
</div>
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
		<tab-bar-item-type type="nearby" label="Nearby" icon="nearby"></tab-bar-item-type>
		<tab-bar-item-type type="location" label= "Cities" icon="location"></tab-bar-item-type>
		<tab-bar-item-type type="friends" label="Friends" icon="friends"></tab-bar-item-type>
		<div class="tab-bar-item">
			<span class="tab-bar-divider"></span>
		</div>
		<tab-bar-item-gender gender="F" label="Female" icon="female"></tab-bar-item-gender>
		<tab-bar-item-gender gender="M" label="Male" icon="male"></tab-bar-item-gender>
	</nav>
</script>
<script type="text/ng-template" id="tab-bar-item-type">
	<div class="tab-bar-item" ng-click="makeActiveType()" ng-class="{'is-active': isActiveType()}">
		<span class="icon icon-{{icon}}"></span>
		<span class="tab-bar-item-label">{{label}}</span>
	</div>
</script>
<script type="text/ng-template" id="tab-bar-item-gender">
	<div class="tab-bar-item" ng-click="makeActiveGender()" ng-class="{'is-active': isActiveGender()}">
		<span class="icon icon-{{icon}}"></span>
		<span class="tab-bar-item-label">{{label}}</span>
	</div>
</script>
<script type="text/ng-template" id="city-list">
	<div class="city-select" ng-class="{'is-up': citiesAreUp}" ng-show="citiesAreVisible()">
		<div class="city-select-toggle" ng-click="toggleCityList()">Select City</div>
		<h2 class="city-select-header">Select a city to view its leaderboard</h2>
		<div class="city-list-scroll-wrap">
			<ul class="city-list">
				<li class="city-list-item" ng-click="setActiveCity('Chicago')">Chicago</li>
				<li class="city-list-item" ng-click="setActiveCity('New York')">New York</li>
				<li class="city-list-item" ng-click="setActiveCity('Los Angeles')">Los Angeles</li>
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
			<div class="filter filter--distance" ng-hide="hideDistanceFilter()" ng-class="{'is-active': isActiveFilter('radius_mi')}">
				<div class="filter-label" ng-click="activateFilter('radius_mi')">Distance: {{filters.radius_mi.value}}</div>
				<div class="filter-wrap">
					<div class="filter-control" >
						<div class="filter-select">
							<select name="radius_mi" ng-focus="activateFilter('radius_mi')" id="radius_mi" ng-model="filters.radius_mi">
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
			<div class="filter filter--age" ng-class="{'is-active': isActiveFilter('age_min') && isActiveFilter('age_max')}">
				<div class="filter-label" ng-click="activateFilter('age_min'); activeFilter('age_max')">Age: Min. Age: {{filters.age_min}}/ Max Age: {{filters.age_max}}</div>
				<div class="filter-wrap">
					<div class="filter-control">
						<div class="filter-input filter-input-min">
							<input type="number" pattern="\d*" min="18" max="100" name="age_min" id="age_min" ng-focus="activateFilter('age_min'); activateFilter('age_max')" ng-model="filters.age_min">
						</div>
						<div class="filter-input filter-input-max">
							<input type="number" pattern="\d*" min="18" max="100" name="age_max" id="age_max" ng-focus="activateFilter('age_min'); activateFilter('age_max')" ng-model="filters.age_max">
						</div>
					</div>
					<div class="filter-toggle-wrap">
						<div class="filter-toggle" ng-click="toggleFilter('age_min'); toggleFilter('age_max')"></div>
					</div>
				</div>
			</div>
			<div class="filter filter--occupation" ng-class="{'is-active': isActiveFilter('occupation')}">
				<div class="filter-label" ng-click="activateFilter('occupation')">Occupation</div>
				<div class="filter-wrap">
					<div class="filter-control">
						<div class="filter-select">
							<select name="occupation" ng-model="filters.occupation" ng-focus="activateFilter('occupation')" id="occupation">
								<optgroup label="Select an occupation">
									<option value="All">All</option>
									<option value="">2 Miles</option>
									<option value="5">5 Miles</option>
									<option value="10">10 Miles</option>
									<option value="20">20 Miles</option>
									<option value="40">40 Miles</option>
									<option value="80">80 Miles</option>
									<option value="200">200 Miles</option>
									<option value="500">500 Miles</option>
									<option value="1000">1000 Miles</option>
								</optgroup>
							</select>
						</div>
					</div>
					<div class="filter-toggle-wrap">
						<div class="filter-toggle" ng-click="toggleFilter('occupation')"></div>
					</div>
				</div>
			</div>
			<div class="filter filter--religion" ng-class="{'is-active': isActiveFilter('religion')}">
				<div class="filter-label" ng-click="activateFilter('religion')">Religion</div>
				<div class="filter-wrap">
					<div class="filter-control">
						<div class="filter-select">
							<select name="religion" ng-focus="activateFilter('religion')" ng-model="filters.religion" id="religion">
								<optgroup label="Select a religion">
									<option value="All">All</option>
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
								</optgroup>
							</select>
						</div>
					</div>
					<div class="filter-toggle-wrap">
						<div class="filter-toggle" ng-click="toggleFilter('religion')"></div>
					</div>
				</div>
			</div>
			{{_activeFilters}}
			{{filters}}
			<div class="filters-view-buttons">
				<div class="filters-view-button-wrap">
					<div class="button button-radius button-ghost button-cancel" ng-click="hideFilters()">Cancel</div>
				</div>
				<div class="filters-view-button-wrap">
					<div class="button button-radius button-fill button-apply" ng-click="applyFilters()">Apply</div>
				</div>
			</div>
		</form>
	</div>
</script>
<script>
	(function (window) {
	    window.theGrade = {};
	    window.theGrade.fbid = '48611106';
	    window.theGrade.proxAuth = 'oE9FaTgLsDFNvQLkiYGS6ML2FdffDsi4SA54eN1qGKmYJymhEcsyBFtQokJc';
	})(window);
</script>
<script src="js/leaderboard.js"></script>
</html>