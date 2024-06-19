[![GBIF Hosted Portal](https://docs.gbif.org/style/gbif-hosted-portal.svg)](https://github.com/gbif/hosted-portals)
[![Build Status](https://builds.gbif.org/job/hp-antarctic/badge/icon)](https://builds.gbif.org/job/hp-antarctic/lastBuild/console)
<!-- License badge example: [![CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY%2D-SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/) -->

# GBIF Hosted Portal: hp-antarctic

This Jekyll website, **[hp-antarctic](https://hp-antarctic.gbif-staging.org/)**, makes use of a theme and biodiversity widgets developed by the GBIF network.

You can find information on editing this site and more on [gbif/hosted-portals](https://github.com/gbif/hosted-portals)

> Powered by [GBIF](https://www.gbif.org/)

## Sites

Ongoing translations on `master` branch can be viewed at UAT: https://hp-antarctic.gbif-uat.org/

Translations on `master` branch are hidden for staging as it is still in development. 

## Running the site locally

Jekyll requires Ruby version 2.5.0 or higher. Please follow the platform specific installation instructions [here](https://jekyllrb.com/docs/installation/).

The `Gemfile` and `Gemfile.lock` are already in the project directory. Use the following command to install dependencies:

```
bundle install
```

Then serve the Jekyll site locally by

```
bundle exec jekyll serve
```

Navigate to the server address in your console to view the site.
