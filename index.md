<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Jonathan Ganz - Security Engineer</title>

    <!-- Bootstrap Core CSS -->
    <link href="https://jonganz.com/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="https://jonganz.com/vendor/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

    <!-- Theme CSS -->
    <link href="https://jonganz.com/css/agency.css" rel="stylesheet">

    <script type="text/javascript">var submitted=false;</script>
    <link rel='icon' type='image/png' href='https://jonganz.com/favicon.ico'>
  </head>

  <body id="page-top">

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Jonathan Ganz</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio">Research</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Application Security Engineer</div>
          <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#skills">About</a>
        </div>
      </div>
    </header>

    <!-- Skills Section -->
    <section id="skills">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Skills</h2>
            <h3 class="section-space"></h3>
          </div>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-search fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Research</h4>
            <p class="text-muted">Experimentation to discover cutting edge vulnerabilities and security solutions.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Software Engineering</h4>
            <p class="text-muted">Develop tools to measure and enhance the security of computer systems and networks.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x text-primary"></i>
              <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">Security Consulting</h4>
            <p class="text-muted">Penetration testing to evaluate the security of infrastructure.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Grid Section -->
    <section id="portfolio" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Research</h2>
                    <h3 class="section-subheading text-muted">Experiments I've Performed</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 portfolio-item">
                    <a href="#ASLR" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/terminal.png" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Control-Flow Integrity</h4>
                        <p class="text-muted">Address Space Layout Randomization</p>
                    </div>
                </div>
                <div class="col-md-4 portfolio-item">
                    <a href="#Scantegrity" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/ballot.png" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Electronic Voting Security</h4>
                        <p class="text-muted">Security Evaluation of Scantegrity II</p>
                    </div>
                </div>
                <div class="col-md-4 portfolio-item">
                    <a href="#Retransmits" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/network.png" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Measuring Network Retransmits</h4>
                        <p class="text-muted">Performance Evaluation of Monitors</p>
                    </div>
                </div>
                <div class="col-md-4 portfolio-item">
                    <a href="#Multipath" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/server.png" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Resilient Multipath Routing</h4>
                        <p class="text-muted">Recovery Delay Affected by QoS</p>
                    </div>
                </div>
                <div class="col-md-4 portfolio-item">
                    <a href="#Sanitize" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/lenna.png" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>Malicious Media Sanitization</h4>
                        <p class="text-muted">Removing Steganographic Content</p>
                    </div>
                </div>
                <div class="col-md-4 portfolio-item">
                    <a href="#Next" class="portfolio-link" data-toggle="modal">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src="img/portfolio/future.png" class="img-responsive" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>My Next Project</h4>
                        <p class="text-muted">Something in the Future</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Experience</h2>
                    <h3 class="section-subheading text-muted">Academic History and Work Experience</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <ul class="timeline">
                        <li>
                            <div class="timeline-image">
                                <img class="img-responsive img-thumbnail rounded-circle" src="img/about/davis.jpg" alt="">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2007-2011</h4>
                                    <h4 class="subheading">Computer Engineering</h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted">Studied computer engineering at UC Davis, graduating in 2011. This major provided an excellent
                                                          background in both hardware and software. Though I was interested in computer security even
                                                          before beginning my degree, I became determined to focus on this field after taking an
                                                          introductory computer security course.</p>
                                </div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <img class="img-responsive img-thumbnail rounded-circle" src="img/about/davis2.jpg" alt="">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2011-2017</h4>
                                    <h4 class="subheading">Computer Science Doctorate</h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted">In 2011 I began my doctoral studies in computer science. Through various research projects and
                                                          internships, I explored many areas of computer and network security.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image">
                                <img class="img-responsive img-thumbnail rounded-circle" src="img/about/sandia.png" alt="">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>Summer 2012</h4>
                                    <h4 class="subheading">Internship at Sandia</h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted">Between June and September 2012 I interned as a security researcher at Sandia National Labs.
                                                          I worked on detecting malicious content hidden in media files and developed an interface that
                                                          efficiently sanitizes data while preserving a high degree of fidelity.</p>
                                </div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <img class="img-responsive img-thumbnail rounded-circle" src="img/about/llnl.jpg" alt="">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>Summer 2013</h4>
                                    <h4 class="subheading">Internship at Lawrence Livermore</h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted">My next summer internship was at Lawrence Livermore. Here, I investigated the feasibility of
                                                          a generic metric for network resilience. Though a unified metric ultimately was not developed,
                                                          I was able to thoroughly detail the technical, computational, and theoretical challenges in
                                                          producing such a metric. I then focused on exploring quantitative metrics for specific
                                                          security properties.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image">
                                <img class="img-responsive img-thumbnail rounded-circle" src="img/about/llnl.jpg" alt="">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>Summer 2014</h4>
                                    <h4 class="subheading">Internship at Lawrence Livermore</h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted">Continuing my work from last summer, I began researching multipath routing to fill the gaps
                                                          in quantitative security metrics. Specifically I measured the recovery delay of data transfers
                                                          over multipath networks with different quality of service levels.</p>
                                </div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image">
                                <img class="img-responsive img-thumbnail rounded-circle" src="img/about/lbnl.jpg" alt="">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>Summer 2015</h4>
                                    <h4 class="subheading">Internship at Lawrence Berkeley</h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted">At Lawrence Berkeley, I evaluated the performance of network monitors. The goal was to determine
                                                          which tool scales the best with high-performance network traffic. This analysis can also be applied
                                                          to other network tools, such as intrusion detection systems.</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image">
                                <img class="img-responsive img-thumbnail rounded-circle" src="img/about/cloud.png" alt="">
                            </div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2017-</h4>
                                    <h4 class="subheading">Application Security Engineer at Cloudflare</h4>
                                </div>
                                <div class="timeline-body">
                                    <p class="text-muted">I am currently working as an Application Security Engineer at Cloudflare. In my role, I get the
                                                          opportunity to work with several different engineering teams, helping them to ensure that the
                                                          products they launch are secure. Cloudflare is an amazing company with great people and we're
                                                          making a fantastic impact on our customers' sites, as well as on the general internet community.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading">Contact Me</h2>
            <h3 class="section-space"></h3>
          </div>
        </div>
          <div class="container-fluid">
            <div class="form-group">
              <form name="contact" id="gform" enctype="text/plain"
                    action="https://docs.google.com/forms/d/e/1FAIpQLScjyaeaD9dPa1xes7DBc40BGNFJAs29emLw5157pMq7INAarQ/formResponse?"
                    method="POST" target="hidden_iframe" onsubmit="submitted=true;">
               <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-2">
                </div>
                <div class="col-sm-3 col-md-3 col-lg-4">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name:" name="entry.1909292113" id="entry.1909292113"
                           autocomplete="name" required data-validation-required-message="Please enter your name"><br>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Email:" name="entry.1351666488" id="entry.1351666488"
                           autocomplete="email" required data-validation-required-message="Please enter your email address"><br>
                  </div>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-4">
                  <div class="form-group">
                    <textarea class="form-control" placeholder="Message:" name="entry.623409289" id="entry.623409289"
                              required data-validation-required-message="Please enter a message"></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-2">
                </div>
                <div class="col-lg-12 text-center">
                  <div id="success">
                  </div>
                  <button type="submit" class="btn btn-xl">Send Message</button>
                  <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>
                </div>
               </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-lg-offset-12">
                    <ul class="list-inline social-buttons">
                        <li class="list-inline-item">
                            <a href="https://escholarship.org/uc/item/0b41q7v8" target="_blank">
                                <i class="fa fa-book"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://github.com/jmganz" target="_blank">
                                <i class="fa fa-github"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://www.linkedin.com/in/jmganz" target="_blank">
                                <i class="fa fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <!-- Experiment Modals -->

    <!-- ASLR Modal -->
    <div class="portfolio-modal modal fade" id="ASLR" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>Control-Flow Integrity</h2>
                                <p class="item-intro text-muted">Entropy Analysis of Different Address Space Layout Randomization Implementations</p>
                                <p align="justify">In this experiment, I examine the security provided by different implementations of Address Space Layout
                                   Randomization (ASLR). ASLR is a security mechanism that increases control-flow integrity by making it more difficult for
                                   an attacker to properly execute a buffer-overflow attack, even in systems with vulnerable software. The strength of ASLR
                                   lies in the randomness of the offsets it produces in memory layouts. I compare multiple operating systems by measuring
                                   the amount of entropy provided to a vulnerable application. This project is the first of its kind to quantitatively
                                   compare the entropy of different ASLR implementations. In performing this experiment, I also provide a method for
                                   remotely assessing the efficacy of a particular security feature on systems that are otherwise unavailable for analysis.
                                   The results obtained highlight the need for independent evaluation of security mechanisms.</p>
                                <img class="img-responsive img-thumbnail" src="img/portfolio/bufferOverflow.png">
                                <p>Figure 1. Stack Layout of a Program Vulnerable to Buffer Overflows</p>
                                <p align="justify">As we can see in Figure 1, a buffer overflow (illustrated by the figure on the right) can wreak havok on
                                   the proper execution of targeted applications. When a vulnerable function is exploited in the way shown above, with an
                                   excessive amount of input, it will generally cause the program to crash. The return address stored in the extended
                                   instruction pointer (register EIP) is overwritten with a value (in the above case, "AAAA" = 0x41414141) that will not
                                   dereference to a valid location. But the main goal of a buffer overflow attack is to redirect the control-flow of the
                                   target executable, a task that requires more precision.
                                </p>
                                <img class="img-responsive img-thumbnail" src="img/portfolio/goldilocks.png">
                                <p>Figure 2. Successful Buffer Overflow Attacks Require an Attack String that's Just Right</p>
                                <p align="justify">Figure 2 symbolizes the three possible outcomes of an attempted buffer overflow attack. Too hot and the
                                   program crashes. Too cold and the program executes nominally, with no unintended effects. When an attacker crafts an
                                   attack string with just the right number of characters to overwrite the return address, and overwrites that return
                                   address with just the right value, the attack will successfully hijack the program's control-flow.
                                </p>
                                <p align="justify">There are several ways to defend against buffer overflow attacks. One way is to ensure that any
                                   applications used are written in memory-safe languages, avoiding programs written in C. This can greatly limit the
                                   software that can be run. Another option is to properly check the bounds on all dynamic input to prevent it from writing
                                   passed the memory buffer allocated for it. Static analysis of the source code can easily identify flaws regarding the
                                   lack of stringent bounds-checking, but fixing these flaws requires availability of the source code for all (memory-unsafe)
                                   software that is run.
                                </p>
                                <p align="justify">Instead of attempting to secure all applications against buffer overflow attacks, one can add a now common
                                   security feature to the system's operating system, making it harder for an attacker to successfully execute a buffer
                                   overflow attack. Address Space Layout Randomization (ASLR) adds random offsets in the memory layout of applications that
                                   are compiled with support for position-independent execution. The values of these random offsets are determined at runtime,
                                   so if the daemonization of services is configured properly, an attack that crashes the vulnerable program will gain no
                                   knowledge of how to effectively hijack its control flow.
                                </p>
                                <p align="justify">Address Space Layout Ranomization does not prevent buffer overflows. It does not patch vulnerable programs.
                                   But it does make it harder for attackers to successfully exploit those vulnerabilities. The key to ASLR's effectiveness is
                                   in the randomness of the offsets added to memory layouts. If these offsets are predictable, then a buffer overflow attack
                                   would be only marginally more difficult, and take possibly only slightly more time to execute, on a system with ASLR, as
                                   compared to a system without such a security feature.
                                </p>
                                <img class="img-responsive img-thumbnail" src="img/portfolio/overflowAttack.png">
                                <p>Figure 3. Diagram of Attack Technique</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scantegrity Modal -->
    <div class="portfolio-modal modal fade" id="Scantegrity" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>Electronic Voting System Security</h2>
                                <p class="item-intro text-muted">Security Evaluation of Scantegrity II</p>
                                <!-- <img class="img-responsive img-thumbnail" src="img/portfolio/escape-preview.png" alt=""> -->
                                <p>Experimental details to come!</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Network Retransmit Modal -->
    <div class="portfolio-modal modal fade" id="Retransmits" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-lg-offset-2">
                            <div class="modal-body">
                                <h2>Measuring Network Retransmits</h2>
                                <p class="item-intro text-muted">Performance Evaluation of Tools for Network Retransmit Analysis</p>
                                <!-- <img class="img-responsive img-thumbnail" src="img/portfolio/startup-framework-preview.png" alt=""> -->
                                <p>Experimental details to come!</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Multipath Modal -->
    <div class="portfolio-modal modal fade" id="Multipath" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>Resilient Multipath Routing</h2>
                                <p class="item-intro text-muted">Recovery Delay in Multipath Routing Networks</p>
                                <!-- <img class="img-responsive img-thumbnail" src="img/portfolio/treehouse-preview.png" alt=""> -->
                                <p>Experimental details to come!</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Malicious Media Modal -->
    <div class="portfolio-modal modal fade" id="Sanitize" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>Malicious Media Sanitization</h2>
                                <p class="item-intro text-muted">Automatic Removal of Malicious Content Hidden in Media Files</p>
                                <!-- <img class="img-responsive img-thumbnail" src="img/portfolio/golden-preview.png" alt=""> -->
                                <p>Experimental details to come!</p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Future Project Modal -->
    <div class="portfolio-modal modal fade" id="Next" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-lg-offset-2">
                            <div class="modal-body">
                                <!-- Project Details Go Here -->
                                <h2>My Next Project</h2>
                                <p class="item-intro text-muted">Whatever Piques My Interest</p>
                                <img class="img-responsive img-thumbnail" src="img/portfolio/construction.gif" alt="">
                                <p></p>
                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

    <script type="text/javascript">
      $('#gform').on('submit', function() {
        $('#gform *').fadeOut(2000);
        $('<div class="col-lg-12 text-center"><h3 class="section-heading">Thank You!</h3><br><h4 class="section-heading">I will respond promptly</h4></div>').hide().prependTo('#gform').fadeIn(2000);
      });
    </script>

    <!-- Bootstrap Core JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha256-5+02zu5UULQkO7w1GIr6vftCgMfFdZcAHeDtFnKZsBs=" crossorigin="anonymous"></script>

    <!-- jQuery Easing Plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js" integrity="sha256-H3cjtrm/ztDeuhCN9I4yh4iN2Ybx/y1RM7rMmAesA0k=" crossorigin="anonymous"></script>

    <!-- Contact Form JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqBootstrapValidation/1.3.7/jqBootstrapValidation.min.js" integrity="sha256-EWTKDb6ITyGNwIp2T3a+uQ8iBdkiaRVDImwvJAVcUgs=" crossorigin="anonymous"></script>

    <!-- Theme JavaScript -->
    <script src="https://jonganz.com/js/agency.js" integrity="sha256-YeasUfOuzeR2IMXRyJPMuYgLGS9t2qu5Gsy7QMgaMi4=" crossorigin="anonymous"></script>

  </body>

</html>
