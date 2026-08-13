import React from "react";
import {
  BarChart3,
  TrendingUp,
  Activity,
  PieChart,
  ArrowRight,
  Zap,
  Database,
  ShieldCheck,
  Users,
  HelpCircle,
  CheckCircle2,
  Compass,
  Sliders,
} from "lucide-react";

const Home = () => {
  const userName = localStorage.getItem("userName") || "User";

  return (
    <div
      className="min-h-screen dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white"
      // className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white"
    >
      {/* Navigation Bar */}
      {/* <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-tr from-indigo-600 to-cyan-500 p-2 rounded-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Omni<span className="text-cyan-400">Data</span> Analytics
            </span>
          </div>
          <nav className="hidden xl:flex items-center space-x-6 text-sm text-slate-400">
            <a href="#descriptive" className="hover:text-white transition">
              Descriptive
            </a>
            <a href="#diagnostic" className="hover:text-white transition">
              Diagnostic
            </a>
            <a href="#exploratory" className="hover:text-white transition">
              Exploratory
            </a>
            <a href="#predictive" className="hover:text-white transition">
              Predictive
            </a>
            <a href="#prescriptive" className="hover:text-white transition">
              Prescriptive
            </a>
            <a href="#realtime" className="hover:text-white transition">
              Real-Time
            </a>
            <a href="#governance" className="hover:text-white transition">
              Governance
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-medium text-sm">
              {userName.charAt(0)}
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-12 text-center">
        <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-cyan-400 text-xs font-medium mb-6">
          <Zap className="w-3.5 h-3.5" />
          <span>Full-Spectrum Analytics Platform</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Hello{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400">
            {userName}
          </span>
          , welcome home.
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-8">
          Explore every dimension of data intelligence. From looking backwards
          at historical performance to prescribing automated actions for the
          future.
        </p>
      </section>

      {/* Main Analytics Sections Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-24 space-y-12">
        {/* 1. Descriptive Analytics */}
        {/* <section
          id="descriptive"
          className=" bg-slate-200 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">
                    Pillar 1
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Descriptive Analytics ("What happened?")
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-2xl">
                Summarizes historical data and key performance indicators (KPIs)
                to reveal patterns on what has already occurred.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-300 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-xl p-5">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                YTD Revenue
              </span>
              <div className="text-3xl font-bold mt-2 mb-1">$1,429,800</div>
              <span className="text-xs text-emerald-400 font-medium">
                +14.2% vs previous year
              </span>
            </div>
            <div className="bg-slate-300 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-xl p-5">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                Total Unique Visitors
              </span>
              <div className="text-3xl font-bold mt-2 mb-1">452,110</div>
              <span className="text-xs text-emerald-400 font-medium">
                +8.5% growth rate
              </span>
            </div>
            <div className="bg-slate-300 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-xl p-5">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                Average Order Value
              </span>
              <div className="text-3xl font-bold mt-2 mb-1">$84.50</div>
              <span className="text-xs text-slate-400 font-medium">
                Baseline stable
              </span>
            </div>
          </div>
        </section> */}

        <section
          id="descriptive"
          className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <TrendingUp className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                    Pillar 1
                  </span>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Descriptive Analytics ("What happened?")
                  </h2>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
                Summarizes historical data and key performance indicators (KPIs)
                to reveal patterns on what has already occurred.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Revenue */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                YTD Revenue
              </span>

              <div className="text-3xl font-bold mt-2 mb-1 text-slate-900 dark:text-white">
                $1,429,800
              </div>

              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                +14.2% vs previous year
              </span>
            </div>

            {/* Visitors */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                Total Unique Visitors
              </span>

              <div className="text-3xl font-bold mt-2 mb-1 text-slate-900 dark:text-white">
                452,110
              </div>

              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                +8.5% growth rate
              </span>
            </div>

            {/* AOV */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                Average Order Value
              </span>

              <div className="text-3xl font-bold mt-2 mb-1 text-slate-900 dark:text-white">
                $84.50
              </div>

              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Baseline stable
              </span>
            </div>
          </div>
        </section>

        {/* 2. Diagnostic Analytics */}
        {/* <section
          id="diagnostic"
          className="bg-slate-200 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                    Pillar 2
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Diagnostic Analytics ("Why did it happen?")
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-2xl">
                Uncovers root causes, variance reasons, and correlations by
                drilling down into data subsets.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-300 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-300  mb-2">
                Anomaly Root Cause Analysis
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Spike in customer drop-offs identified during checkout phase.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-slate-900 p-3 rounded-lg text-xs">
                  <span className="text-slate-300">
                    Payment Gateway Timeout (Gateway B)
                  </span>
                  <span className="text-rose-400 font-semibold">
                    68% impact
                  </span>
                </div>
                <div className="flex justify-between items-center bg-slate-900 p-3 rounded-lg text-xs">
                  <span className="text-slate-300">
                    Mobile UI Latency on iOS Safari
                  </span>
                  <span className="text-amber-400 font-semibold">
                    22% impact
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-300 mb-2">
                  Segment Correlation Factor
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Strong correlation found between push notification frequency
                  and repeat purchases.
                </p>
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  r = 0.84
                </div>
                <p className="text-xs text-slate-500">
                  High positive correlation index established across cohort
                  groups.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <section
          id="diagnostic"
          className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                  <HelpCircle className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                    Pillar 2
                  </span>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Diagnostic Analytics ("Why did it happen?")
                  </h2>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
                Uncovers root causes, variance reasons, and correlations by
                drilling down into data subsets.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Root Cause */}
            <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Anomaly Root Cause Analysis
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Spike in customer drop-offs identified during checkout phase.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-transparent p-3 rounded-lg text-xs">
                  <span className="text-slate-700 dark:text-slate-300">
                    Payment Gateway Timeout (Gateway B)
                  </span>

                  <span className="text-rose-600 dark:text-rose-400 font-semibold">
                    68% impact
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-transparent p-3 rounded-lg text-xs">
                  <span className="text-slate-700 dark:text-slate-300">
                    Mobile UI Latency on iOS Safari
                  </span>

                  <span className="text-amber-600 dark:text-amber-400 font-semibold">
                    22% impact
                  </span>
                </div>
              </div>
            </div>

            {/* Correlation */}
            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Segment Correlation Factor
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  Strong correlation found between push notification frequency
                  and repeat purchases.
                </p>

                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                  r = 0.84
                </div>

                <p className="text-xs text-slate-500">
                  High positive correlation index established across cohort
                  groups.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Exploratory Data Analysis (EDA) */}
        {/* 3. Exploratory Data Analysis (EDA) */}
        <section
          id="exploratory"
          className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-lg">
                  <Compass className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-wider">
                    Pillar 3
                  </span>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Exploratory Analysis (EDA)
                  </h2>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
                Investigates datasets to discover hidden patterns, spot
                outliers, and formulate completely new hypotheses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-wider">
                Outlier Detection
              </span>

              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mt-2 mb-1">
                Cluster Skewness
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Identified anomalous high-volume API consumption originating
                from Region West.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-wider">
                Hypothesis Engine
              </span>

              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mt-2 mb-1">
                User Feature Mapping
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Testing linkage between dark mode UI preference and extended
                session duration.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-wider">
                Data Distribution
              </span>

              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mt-2 mb-1">
                Skewness Test: Normal
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Gaussian spread verified across primary consumer pricing
                brackets.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Predictive Analytics */}
        {/* <section
          id="predictive"
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <PieChart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                    Pillar 4
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Predictive Analytics ("What is likely to happen?")
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-2xl">
                Uses historical stats, machine learning, and statistical
                modeling to forecast trends and outcomes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-6">
              <h3 className="text-sm font-medium text-slate-300 mb-2">
                Q3 Revenue Forecast Projections
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Machine learning regression model projection with 95% confidence
                bounds.
              </p>
              <div className="h-28 flex items-end space-x-3 pt-2">
                {[50, 60, 55, 70, 85, 95, 110].map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/50 rounded-t transition"
                    style={{ height: `${v}%` }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-300 mb-2">
                  Customer Churn Risk Scoring
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Identifies subscribers at high risk of cancellation within 30
                  days.
                </p>
                <div className="flex items-center space-x-4 bg-slate-900 p-4 rounded-xl">
                  <span className="text-3xl font-extrabold text-amber-400">
                    142
                  </span>
                  <span className="text-xs text-slate-300">
                    High-risk accounts flagged for proactive customer success
                    outreach.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* 4. Predictive Analytics */}
        <section
          id="predictive"
          className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-lg">
                  <PieChart className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                    Pillar 4
                  </span>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Predictive Analytics ("What is likely to happen?")
                  </h2>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
                Uses historical stats, machine learning, and statistical
                modeling to forecast trends and outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Revenue Forecast */}
            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-6">
              <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Q3 Revenue Forecast Projections
              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Machine learning regression model projection with 95% confidence
                bounds.
              </p>

              <div className="h-28 flex items-end space-x-3 pt-2">
                {[50, 60, 55, 70, 85, 95, 110].map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-cyan-500/20 hover:bg-cyan-500/50 rounded-t transition"
                    style={{ height: `${v}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Churn */}
            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Customer Churn Risk Scoring
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  Identifies subscribers at high risk of cancellation within 30
                  days.
                </p>

                <div className="flex items-center space-x-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-transparent">
                  <span className="text-3xl font-extrabold text-amber-500 dark:text-amber-400">
                    142
                  </span>

                  <span className="text-xs text-slate-600 dark:text-slate-300">
                    High-risk accounts flagged for proactive customer success
                    outreach.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 5. Prescriptive Analytics */}
        {/* <section
          id="prescriptive"
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                    Pillar 5
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Prescriptive Analytics ("What should we do?")
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-2xl">
                Recommends specific actions, budget allocations, and automated
                operational decisions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                Resource Allocation
              </span>
              <h4 className="font-semibold text-slate-200 mt-2 mb-1">
                Server Cluster Scaling
              </h4>
              <p className="text-xs text-slate-400">
                Recommendation: Scale compute instances up by 25% ahead of
                forecasted Friday traffic peak.
              </p>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                Dynamic Pricing
              </span>
              <h4 className="font-semibold text-slate-200 mt-2 mb-1">
                Tier 2 Subscription Adjust
              </h4>
              <p className="text-xs text-slate-400">
                Recommendation: Optimize discount thresholds for cart abandoners
                to lift conversions.
              </p>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                Inventory Rules
              </span>
              <h4 className="font-semibold text-slate-200 mt-2 mb-1">
                Automated Stock Buffer
              </h4>
              <p className="text-xs text-slate-400">
                {" "}
                Recommendation: Re-route warehouse fulfillment center targets to
                reduce shipping latency.
              </p>
            </div>
          </div>
        </section> */}

        {/* 5. Prescriptive Analytics */}
        <section
          id="prescriptive"
          className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                    Pillar 5
                  </span>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Prescriptive Analytics ("What should we do?")
                  </h2>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
                Recommends specific actions, budget allocations, and automated
                operational decisions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Resource Allocation
              </span>

              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mt-2 mb-1">
                Server Cluster Scaling
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Recommendation: Scale compute instances up by 25% ahead of
                forecasted Friday traffic peak.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Dynamic Pricing
              </span>

              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mt-2 mb-1">
                Tier 2 Subscription Adjust
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Recommendation: Optimize discount thresholds for cart abandoners
                to lift conversions.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Inventory Rules
              </span>

              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mt-2 mb-1">
                Automated Stock Buffer
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Recommendation: Re-route warehouse fulfillment center targets to
                reduce shipping latency.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Real-Time Telemetry */}
        {/* <section
          id="realtime"
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
                    Pillar 6
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Real-Time Streaming Telemetry
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-2xl">
                Monitors live data feeds, transaction events, and instantaneous
                application health metrics.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-950/50 border border-slate-800/80 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-slate-300">
                  Live Transaction Pulse
                </span>
                <span className="flex items-center text-xs text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-1.5"></span>
                  Streaming Live
                </span>
              </div>
              <div className="h-24 flex items-end space-x-2">
                {[30, 70, 45, 90, 60, 75, 40, 85, 95, 60, 70, 80].map(
                  (v, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-purple-500/30 rounded-t"
                      style={{ height: `${v}%` }}
                    ></div>
                  ),
                )}
              </div>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-sm font-medium text-slate-300 mb-3 block">
                  Stream Health
                </span>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Events Ingested</span>
                    <span className="text-slate-200">45.2k / sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Packet Drop Rate</span>
                    <span className="text-emerald-400">0.001%</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-slate-500 pt-4 border-t border-slate-800">
                Kafka clusters operating normally.
              </div>
            </div>
          </div>
        </section> */}

        {/* 6. Real-Time Telemetry */}
        <section
          id="realtime"
          className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg">
                  <Activity className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">
                    Pillar 6
                  </span>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Real-Time Streaming Telemetry
                  </h2>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
                Monitors live data feeds, transaction events, and instantaneous
                application health metrics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Live Transaction */}
            <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Live Transaction Pulse
                </span>

                <span className="flex items-center text-xs text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse mr-1.5"></span>
                  Streaming Live
                </span>
              </div>

              <div className="h-24 flex items-end space-x-2">
                {[30, 70, 45, 90, 60, 75, 40, 85, 95, 60, 70, 80].map(
                  (v, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-purple-500/30 rounded-t"
                      style={{ height: `${v}%` }}
                    />
                  ),
                )}
              </div>
            </div>

            {/* Stream Health */}
            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3 block">
                  Stream Health
                </span>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">
                      Events Ingested
                    </span>

                    <span className="text-slate-700 dark:text-slate-200">
                      45.2k / sec
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">
                      Packet Drop Rate
                    </span>

                    <span className="text-emerald-600 dark:text-emerald-400">
                      0.001%
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 pt-4 border-t border-slate-200 dark:border-slate-800">
                Kafka clusters operating normally.
              </div>
            </div>
          </div>
        </section>

        {/* 7. Data Governance & Pipelines */}
        {/* <section
          id="governance"
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-rose-500/10 text-rose-400 rounded-lg">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
                    Pillar 7
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Data Governance & Pipelines (DataOps)
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 text-sm max-w-2xl">
                Manages data quality, lineage tracking, schema enforcement,
                security compliance, and warehouse ingestion.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
                Pipeline Health
              </span>
              <h4 className="font-semibold text-slate-200 mt-2 mb-1">
                ETL Sync Status
              </h4>
              <p className="text-xs text-slate-400">
                All 24 automated transformation jobs finished with zero error
                flags.
              </p>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
                Security & Privacy
              </span>
              <h4 className="font-semibold text-slate-200 mt-2 mb-1">
                PII Masking Audit
              </h4>
              <p className="text-xs text-slate-400">
                Dynamic column-level security active for sensitive customer
                records.
              </p>
            </div>
            <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
                Data Lineage
              </span>
              <h4 className="font-semibold text-slate-200 mt-2 mb-1">
                Catalog Dependency Graph
              </h4>
              <p className="text-xs text-slate-400">
                Complete node mapping verified from source database to BI report
                tier.
              </p>
            </div>
          </div>
        </section> */}
        {/* 7. Data Governance & Pipelines */}
        <section
          id="governance"
          className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg">
                  <Database className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-xs text-rose-600 dark:text-rose-400 font-semibold uppercase tracking-wider">
                    Pillar 7
                  </span>

                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Data Governance & Pipelines (DataOps)
                  </h2>
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-2xl">
                Manages data quality, lineage tracking, schema enforcement,
                security compliance, and warehouse ingestion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-rose-600 dark:text-rose-400 font-semibold uppercase tracking-wider">
                Pipeline Health
              </span>

              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mt-2 mb-1">
                ETL Sync Status
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                All 24 automated transformation jobs finished with zero error
                flags.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-rose-600 dark:text-rose-400 font-semibold uppercase tracking-wider">
                Security & Privacy
              </span>

              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mt-2 mb-1">
                PII Masking Audit
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Dynamic column-level security active for sensitive customer
                records.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5">
              <span className="text-xs text-rose-600 dark:text-rose-400 font-semibold uppercase tracking-wider">
                Data Lineage
              </span>

              <h4 className="font-semibold text-slate-800 dark:text-slate-200 mt-2 mb-1">
                Catalog Dependency Graph
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Complete node mapping verified from source database to BI report
                tier.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <p>
          © 2026 Analytics Platform Demo. Built with React & Tailwind * with
          (❤️) by Subhankar.
        </p>
      </footer>
    </div>
  );
};

export default Home;
