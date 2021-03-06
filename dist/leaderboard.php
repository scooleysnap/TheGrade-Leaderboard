<?php 

require_once __DIR__ . '/../../bootstrap.php';

$fbid = $gRRH->getParam('fbid');
$proxAuth = $gRRH->getParam('prox_auth_token');

$aa_cities = Data::get('cities');
$cities = array_keys($aa_cities);

$occupations = Data::get('occupations');

$religions = Data::get('religions');

$cdnUrl = App::CDN_URL . '/uploads/photos/';



 ?>
<!DOCTYPE html>
<html lang="en" ng-app="TheGrade.Leaderboard">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="https://www.thegradedating.com/app/mobile/css/leaderboard-v2.css?v=14">
	<title>The Grade - Leaderboard</title>
</head>
<body ontouchstart="">
	<div class="page-wrap" ng-view></div>
</body>
<script type="text/ng-template" id="leaderboard-view">
	<title-bar></title-bar>
	<div class="scroll-wrap">
		<ul class="leaderboard" ng-class="{'is-loading': isLoading}">
			<leaderboard-item ng-repeat="user in users" user="user"></leaderboard-item>
		</ul>
		<div class="no-results" ng-show="noResults()">
			<h1 class="no-results-header">No Results!</h1>
			<p class="no-results-copy">Try Changing your filter settings, or select a different leaderboard</p>
		</div>
	</div>
	<city-list></city-list>
	<tab-bar active-type="activeType" cities-are-up="citiesAreUp" active-gender="activeGender"></tab-bar>
	<filter-view></filter-view>
</script>
<script type="text/ng-template" id="title-bar">
	<header class="title-bar title-bar-fixed">
		<div class="button button-close" native-link ng-click="goNativeUrl('close')"><span class="icon icon-x"></span></div>
		<h1 class="title-bar-title">{{getTitle()}}</h1>
		<div class="button button-radius button-ghost button-filter" ng-class="{'is-disabled': disableFilterButton()}" ng-click="showFilters()">Filter <span class="icon icon-settings"></span></div>
	</header>
</script>
<script type="text/ng-template" id="leaderboard-item">
	<li class="leaderboard-row" native-link ng-click="goNativeUrl('profile', user.fbid)">
		<div class="leaderboard-item leaderboard-count"></div>
		<div class="leaderboard-item leaderboard-photo"><img ng-src="<?php echo $cdnUrl ?>{{user.img}}" width-"53" height="94" alt=""></div>
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
				<?php


				if(count($cities)){
				   foreach($cities as $city){
				      echo "<li class=\"city-list-item\" ng-click=\"setActiveCity('$city')\">$city</li>";
				   }
				}


				?>
			</ul>
		</div>
	</div>
</script>
<script type="text/ng-template" id="filter-view">
	<div class="filters-view" ng-class="{'is-visible': filtersAreVisible}">
		<header class="title-bar">
			<h1 class="title-bar-title">Filters</h1>
		</header>
		<h1 class="filters-view-header">Tap a filter to select. Uncheck to deselect</h1>
		<form action="" name="filtersForm">
			<div class="filter filter--distance" ng-hide="hideDistanceFilter()" ng-class="{'is-active': isActiveFilter('radius_mi')}">
				<div class="filter-label" ng-click="activateFilter('radius_mi')">Distance: {{filters.radius_mi.value}}</div>
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
			<div class="filter filter--age" ng-class="{'is-active': isActiveFilter('age_min') && isActiveFilter('age_max')}">
				<div class="filter-label" ng-click="activateFilter('age_min'); activateFilter('age_max')">Age: </div>
				<div class="filter-wrap">
					<div class="filter-control">
						<div class="filter-select filter-select-min">
							<select name="age_min" id="age_min" 
							ng-model="filters.age_min.value"
							ng-focus="activateFilter('age_min'); activateFilter('age_max')"
							ng-change="checkFilterAgeMax()"
							ng-options="label for (label, value) in ageRangeOptionsMin">
							</select>
							<span class="filter-select-value">{{filters.age_min.value == 50 ? '50+' : filters.age_min.value}}</span>
						</div>
						<div class="filter-select filter-select-max">
							<select name="age_max" id="age_max" 
							ng-model="filters.age_max.value"
							ng-focus="activateFilter('age_min'); activateFilter('age_max')"
							ng-change="checkFilterAgeMin()"
							ng-options="name for (name, value) in ageRangeOptionsMax">
							</select>
							<span class="filter-select-value">{{filters.age_max.value == 100 ? '50+' : filters.age_max.value}}</span>
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
							<select name="occupation" ng-model="filters.occupation.value" ng-focus="activateFilter('occupation')" id="occupation">
								<optgroup label="Select an occupation">
									<option value="All">All</option>
									<?php


									if(count($occupations)){
									   foreach($occupations as $occupation => $value){
									      echo "<option value=\"$occupation\">$value</option>";
									   }
									}


									?>
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
							<select name="religion" ng-focus="activateFilter('religion')" ng-model="filters.religion.value" id="religion">
								<optgroup label="Select a religion">
									<option value="All">All</option>
									<?php


									if(count($religions)){
									   foreach($religions as $religion => $value){
									      echo "<option value=\"$religion\">$value</option>";
									   }
									}


									?>
								</optgroup>
							</select>
						</div>
					</div>
					<div class="filter-toggle-wrap">
						<div class="filter-toggle" ng-click="toggleFilter('religion')"></div>
					</div>
				</div>
			</div>
			<!-- optional clear button ****
			<div class="filters-view-clear-button-wrap">
				<div class="button button-radius button-ghost button-clear" ng-click="clearFilters()">Clear All Filters</div>
			</div>
			-->
			<div class="filters-view-buttons">
				<div class="filters-view-button-wrap">
					<div class="button button-radius button-ghost button-cancel" ng-click="cancelButtonFilters()">Cancel</div>
				</div>
				<div class="filters-view-button-wrap">
					<div class="button button-radius button-fill button-apply" ng-click="applyFilters()">OK</div>
				</div>
			</div>
		</form>
	</div>
</script>
<script>
	(function (window) {
	    window.theGrade = {};
	    window.theGrade.fbid = '<?php echo $fbid; ?>'
	    window.theGrade.proxAuth = '<?php echo $proxAuth; ?>';
	})(window);
</script>
<script src="https://www.thegradedating.com/app/mobile/js/leaderboard-v2.js?v=14"></script>
</html>