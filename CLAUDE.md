# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML landing page project for NYC Charter School Job Fair events. The project contains self-contained HTML pages with embedded CSS and JavaScript for job fair landing pages.

## Project Structure

- **main-landing-page.html** - Primary landing page for the NYC Charter School Career Fair event (April 24, 2025)
- **images/** - Contains logo assets (CSJ-logo-2019-site-icon.png)

## Architecture

The landing page is built as a single-file HTML page with:
- Embedded CSS in `<style>` tags (lines 7-389)
- Embedded JavaScript in `<script>` tags (lines 523-578)
- Inline SVG graphics for icons and placeholder visuals
- No external dependencies or build process

### Key Components

1. **Navigation Bar** (lines 21-76, 393-403) - Fixed top navigation with logo and CTA buttons
2. **Urgency Banner** (lines 77-100, 405-410) - Countdown timer and registration stats
3. **Hero Section** (lines 101-305, 412-506) - Main event information with dual-column layout
4. **Trust Indicators** (lines 231-253, 459-478) - Statistics for placed teachers, partner schools, and interview rates
5. **School Logos Section** (lines 306-348, 508-521) - Trust bar with partner school names

### JavaScript Features

- **Countdown Timer** (lines 525-540) - Calculates and displays time until early bird registration deadline (March 31, 2025)
- **Animated Counter** (lines 543-563) - Animates the "Teachers Already Registered" number from 500 to 523
- **Smooth Scroll** (lines 566-577) - Handles anchor link navigation

## Development Workflow

Since this is a static HTML project with no build tools:

1. **Preview changes**: Open the HTML file directly in a browser
2. **Edit files**: Modify the HTML, CSS, or JavaScript directly in the single file
3. **No compilation needed**: Changes are immediately visible on page refresh

## Responsive Design

The page includes mobile-responsive breakpoints at 768px (lines 350-388) that:
- Stacks hero content into single column
- Hides navigation links and hero visual on mobile
- Centers content and adjusts font sizes
- Reduces spacing for mobile viewports

## Event Configuration

To update event details, modify:
- Event date/time: Lines 431, 437 (display text) and line 526 (countdown deadline)
- Registration count: Line 546 (target value for animation)
- School names: Lines 513-518 (partner school list)
- Trust indicators: Lines 462, 469, 475 (statistics)
- Include file /Users/kentstrong/software_projects/CSJ/redesign_job_fair_landing_pages/design-docs/benefits-of-working-in-a-charter-school.txt as context for marketing content to candidates. This file includes a lot of good reasons to consider working in a charter school.
- Include file at /Users/kentstrong/software_projects/CSJ/redesign_job_fair_landing_pages/design-docs/candidate-user-flow.txt as context for the detailed Candidate user workflow / user story of participating in the career fair event.
- Use Bootstrap 5
- The file located at /Users/kentstrong/software_projects/CSJ/redesign_job_fair_landing_pages/design-docs/benefits-of-working-in-a-charter-school.txt describes the benefits for schools to participate in our career fairs.