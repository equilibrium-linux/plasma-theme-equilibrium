#
# Regular cron jobs for the plasma-theme-equilibrium package
#
0 4	* * *	root	[ -x /usr/bin/plasma-theme-equilibrium_maintenance ] && /usr/bin/plasma-theme-equilibrium_maintenance
