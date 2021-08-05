<script>
	import 'notyf/notyf.min.css';
	import { Router, Route, Redirect, Fallback, getHistory, Layout } from 'swheel';
	import {onMount} from 'svelte';
	import DefaultLayout from './layouts/default.svelte';
	import MainLayout from './layouts/main.svelte';
	import Inner from './layouts/inner.svelte';
	import BlankLayout from './layouts/blank.svelte';
	import HomePage2Layout from './layouts/homepage2.svelte';
	import LoginPage from './pages/Login.svelte';
	import Home from './pages/Home.svelte';
	import HomePage2 from './pages/HomePage2.svelte';
	import LeaderBoard from './pages/Leaderboard.svelte';
	import Schedule from './pages/Schedule.svelte';
	import Videos from './pages/Videos.svelte';
	import Faqs from './pages/Faq.svelte';
	import FormatDetails from './pages/Format_details.svelte';
	import UserDashboard from './pages/users/Dashboard.svelte';
	import UserDashboardZerpPlayer from './pages/users/Dashboard-day-zero-player.svelte';
	import PrivacyPolicy from './pages/PrivacyPolicy.svelte';
	import Cookies from './pages/Cookies.svelte';
	import TermsOfUse from './pages/TermsOfUse.svelte';
	import DayZeroLeader from './pages/users/Dashboard-day-zero-leader.svelte';
	import Location from './pages/Location.svelte';
	import DeviceDetails from './pages/Device_Details.svelte';
	import Support from './pages/Support.svelte';
	import InGameQualifiers from './pages/users/In-game-qualifiers.svelte';
	import UserDashboardPlayoff from './pages/users/User-dashboard-playoff.svelte';
	import ModalRenderer from './components/ModalRenderer.svelte';
	import {User} from './models/user';
	import SaveInvite from './components/SaveInvite.svelte';
	import DevTool from './components/DevTool.svelte';
	import CompleteRegistration from './pages/CompleteRegistration.svelte'
	import Stats from './pages/Stats.svelte';
	import Standings from './pages/TeamsAndStandings.svelte';
import TeamsAndStandings from './pages/TeamsAndStandings.svelte';

	const user = User.getUser();
	
	if(window.location.search == '?RN_DEBUG=true'){
		window.localStorage.setItem('debug', 'true');
	}else if(window.location.search == '?RN_DEBUG=false'){
		window.localStorage.removeItem('debug');
	}

	const isLive = true; //window.localStorage.getItem('debug');
</script>
<svelte:head>
	{#if isLive}
		<script>
			window.fwSettings={
			'widget_id':82000001234
			};
			!function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
		</script>
		<script type='text/javascript' src='https://ind-widget.freshworks.com/widgets/82000001234.js' async defer></script>
	{/if}
</svelte:head>
<Router>
	<!-- {#if isLive} -->
		<!-- <Route path="/invite/:code" component={SaveInvite}/> -->
		<!-- {#if !$user.first_name}
			<Route path="/login" exact>
				<BlankLayout>
					<LoginPage />
				</BlankLayout>
			</Route>
			<Route path="/dashboard">
				<Redirect to="/../login"/>
			</Route>
			<Route path="/register">
				<Redirect to="/../login"/>
			</Route>
		{:else}
			{#if $user.role == 'admin'}
				<Route path="/stats">
					<Stats />
				</Route>
			{/if}
			<Route path="/login">
				<Redirect to="/../dashboard"/>
			</Route>
			<Route path="/register">
				<Redirect to="/../dashboard"/>
			</Route>
			{#if !$user.city}
				<Route path="/dashboard">
					<BlankLayout>
						<Location />
					</BlankLayout>
				</Route>
			{:else if !$user.device_brand}
				<Route path="/dashboard">
					<BlankLayout>
						<DeviceDetails />
					</BlankLayout>
				</Route>
			{:else if !($user.accept_tnc && $user.reg_complete)}
				<Route path="/dashboard">
					<BlankLayout>
						<CompleteRegistration/>
					</BlankLayout>
				</Route>
			{:else}
			<Route path="/dayzeroleader">
				<DefaultLayout>
					<DayZeroLeader />
				</DefaultLayout>
			</Route>
			<Route path="/dashboard">
				<DefaultLayout>
					<UserDashboard />
				</DefaultLayout>
			</Route>
			<Route path="/dashboard1">
				<DefaultLayout>
					<UserDashboardZerpPlayer />
				</DefaultLayout>
			</Route>
			<Route path="/ingamequalifiers">
				<DefaultLayout>
					<InGameQualifiers />
				</DefaultLayout>
			</Route>
			<Route path="/userdashboardplayoff">
				<DefaultLayout>
					<UserDashboardPlayoff />
				</DefaultLayout>
			</Route>
			{/if}
		{/if} -->
		<Route path="/privacypolicy">
			<DefaultLayout>
				<PrivacyPolicy />
			</DefaultLayout>
		</Route>
		<Route path="/termsofuse">
			<DefaultLayout>
				<TermsOfUse />
			</DefaultLayout>
		</Route>
		<Route path="/cookies">
			<DefaultLayout>
				<Cookies />
			</DefaultLayout>
		</Route>
		<!-- <Route path="/support">
			<DefaultLayout>
				<Support />
			</DefaultLayout>
		</Route> -->
		<Route path="/" exact>
			<MainLayout>
				<Home />
			</MainLayout>
		</Route>
		<Route path="/?:params" exact>
			<MainLayout>
				<Home />
			</MainLayout>
		</Route>
		<Route path="/contest">
			<MainLayout>
				<Home />
			</MainLayout>
		</Route>
		<Route path="/contest?:params">
			<MainLayout>
				<Home />
			</MainLayout>
		</Route>
		<!-- <Route path="/vote">
			<MainLayout>
				<Home />
			</MainLayout>
		</Route> -->
		
		<Route path="/format">
			<MainLayout>
				<FormatDetails />
			</MainLayout>
		</Route>
		<Route path="/teamsandstandings">
			<MainLayout>
				<TeamsAndStandings />
			</MainLayout>
		</Route>
		<Route path="/schedule">
			<MainLayout>
				<Schedule />
			</MainLayout>
		</Route>
		<Route path="/videos">
			<Inner>
				<Videos />
			</Inner>
		</Route>
		<!-- <Route path="/faqs">
			<Inner>
				<Faqs />
			</Inner>
		</Route> -->
		
		<!-- <Route path="/devon">
			<DevTool/>
		</Route>
		<Route path="/devoff">
			<DevTool/>
		</Route> -->
	<!-- {:else}
		<Route path="/" exact>
			<HomePage2Layout>
				<HomePage2 />
			</HomePage2Layout>
		</Route>
	{/if} -->
	<Fallback>NotFound</Fallback>
</Router>
<ModalRenderer/>