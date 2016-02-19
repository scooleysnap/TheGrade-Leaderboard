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
	
	<title-bar></title-bar>
	<div class="scroll-wrap">
		<ul class="leaderboard">
			<li class="leaderboard-row">
				<div class="leaderboard-item leaderboard-count"></div>
				<div class="leaderboard-item leaderboard-photo"><img src="http://www.fillmurray.com/640/1136" width-"53" height="94" alt=""></div>
				<div class="leaderboard-item leaderboard-stats">
					<span class="leaderboard-stats-name">Kayla</span>
					<span class="leaderboard-stats-likes">178</span>
				</div>
				<div class="leaderboard-item leaderboard-grade"><span class="grade-circle" data-grade="A+"></span></div>
			</li>
			<li class="leaderboard-row">
				<div class="leaderboard-item leaderboard-count"></div>
				<div class="leaderboard-item leaderboard-photo"><img src="http://www.fillmurray.com/640/1136" width-"53" height="94" alt=""></div>
				<div class="leaderboard-item leaderboard-stats">
					<span class="leaderboard-stats-name">Kayla</span>
					<span class="leaderboard-stats-likes">178</span>
				</div>
				<div class="leaderboard-item leaderboard-grade"><span class="grade-circle" data-grade="A+"></span></div>
			</li>
			<li class="leaderboard-row">
				<div class="leaderboard-item leaderboard-count"></div>
				<div class="leaderboard-item leaderboard-photo"><img src="http://www.fillmurray.com/640/1136" width-"53" height="94" alt=""></div>
				<div class="leaderboard-item leaderboard-stats">
					<span class="leaderboard-stats-name">Kayla</span>
					<span class="leaderboard-stats-likes">178</span>
				</div>
				<div class="leaderboard-item leaderboard-grade"><span class="grade-circle" data-grade="A+"></span></div>
			</li>
			<li class="leaderboard-row">
				<div class="leaderboard-item leaderboard-count"></div>
				<div class="leaderboard-item leaderboard-photo"><img src="http://www.fillmurray.com/640/1136" width-"53" height="94" alt=""></div>
				<div class="leaderboard-item leaderboard-stats">
					<span class="leaderboard-stats-name">Kayla</span>
					<span class="leaderboard-stats-likes">178</span>
				</div>
				<div class="leaderboard-item leaderboard-grade"><span class="grade-circle" data-grade="A+"></span></div>
			</li>
			<li class="leaderboard-row">
				<div class="leaderboard-item leaderboard-count"></div>
				<div class="leaderboard-item leaderboard-photo"><img src="http://www.fillmurray.com/640/1136" width-"53" height="94" alt=""></div>
				<div class="leaderboard-item leaderboard-stats">
					<span class="leaderboard-stats-name">Kayla</span>
					<span class="leaderboard-stats-likes">178</span>
				</div>
				<div class="leaderboard-item leaderboard-grade"><span class="grade-circle" data-grade="A+"></span></div>
			</li>
		</ul>
	</div>
	<tab-bar></tab-bar>
	<filter-view></filter-view>
</script>
<script type="text/ng-template" id="title-bar">
	<header class="title-bar title-bar-fixed">
		<div class="button button-close"><span class="icon icon-x"></span></div>
		<h1 class="title-bar-title">Nearby</h1>
		<div class="button button-radius button-ghost button-filter">Filter <span class="icon icon-settings"></span></div>
	</header>
</script>
<script type="text/ng-template" id="tab-bar">
	<nav class="tab-bar">
		<div class="tab-bar-item" ng-click="selectType('nearby')" ng-class="{'is-active': isActiveType('nearby')}">
			<span class="icon icon-location"></span>
			<span class="tab-bar-item-label">Nearby</span>
		</div>
		<div class="tab-bar-item" ng-click="selectType('location')" ng-class="{'is-active': isActiveType('location')}">
			<span class="icon icon-globe"></span>
			<span class="tab-bar-item-label">Cities</span>
		</div>
		<div class="tab-bar-item" ng-click="selectType('friends')" ng-class="{'is-active': isActiveType('friends')}">
			<span class="icon icon-friends"></span>
			<span class="tab-bar-item-label">Friends</span>
		</div>
		<div class="tab-bar-item">
			<span class="tab-bar-divider"></span>
		</div>
		<div class="tab-bar-item" ng-click="selectGender('F')" ng-class="{'is-active': isActiveGender('F')}">
			<span class="icon icon-female"></span>
			<span class="tab-bar-item-label">Female</span>
		</div>
		<div class="tab-bar-item" ng-click="selectGender('M')" ng-class="{'is-active': isActiveGender('M')}">
			<span class="icon icon-male"></span>
			<span class="tab-bar-item-label">Male</span>
		</div>
	</nav>
</script>
<script type="text/ng-template" id="filter-view">
	<div class="filters-view is-visible">
		<header class="title-bar">
			<h1 class="title-bar-title">Filters</h1>
		</header>
		<h1 class="filters-view-header">Tap a filter to select.</h1>
		<div class="filter filter--distance">
			<div class="filter-label">Distance</div>
			<div class="filter-wrap">
				<div class="filter-control">
					<div class="filter-select">
						<select name="distance" id="distance" ng-model="filter.distance">
							<option selected value="2">2 Miles</option>
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
					<div class="filter-toggle"></div>
				</div>
			</div>
		</div>
		<div class="filter filter--age">
			<div class="filter-label">Age</div>
			<div class="filter-wrap">
				<div class="filter-control">
					<div class="filter-input filter-input-min">
						<input type="number" name="age-min" id="age-min" min="18" value="18" onfocus="if(this.value == '18') { this.value = ''; }" onblur="if(this.value < 18) {this.value = '18'}" >
					</div>
					<div class="filter-input filter-input-max">
						<input type="number" name="age-max" id="age-max" min="18" value="25" onfocus="if(this.value == '25') { this.value = ''; }"  onblur="if(this.value < 25) {this.value = '25'}">
					</div>
				</div>
				<div class="filter-toggle-wrap">
					<div class="filter-toggle"></div>
				</div>
			</div>
		</div>
		<div class="filter filter--occupation">
			<div class="filter-label">Occupation</div>
			<div class="filter-wrap">
				<div class="filter-control">
					<div class="filter-select">
						<select name="occupation" id="occupation">
							<option value="" disabled selected>Select an occupation</option>
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
					<div class="filter-toggle"></div>
				</div>
			</div>
		</div>
		<div class="filter filter--occupation">
			<div class="filter-label">Religion</div>
			<div class="filter-wrap">
				<div class="filter-control">
					<div class="filter-select">
						<select name="religion" id="religion">
							<option value="" disabled selected>Select a religion</option>
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
					<div class="filter-toggle"></div>
				</div>
			</div>
		</div>
		<div class="filters-view-buttons">
			<div class="filters-view-button-wrap">
				<div class="button button-radius button-ghost button-cancel">Cancel</div>
			</div>
			<div class="filters-view-button-wrap">
				<div class="button button-radius button-fill button-apply is-disabled">Apply</div>
			</div>
		</div>
	</div>
</script>
</html>