import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Digital Transformation Consulting',
    description: 'We analyze and redesign your business workflows for maximum efficiency and digital integration.',
    icon: 'workflow',
    features: [
      'Workflow design based on operational needs',
      'Data and task flow automation',
      'Digital process integration',
      'Legacy system modernization',
    ],
  },
  {
    id: '2',
    title: 'Automation & QA Solutions',
    description: 'Eliminate repetitive testing with our comprehensive automation frameworks and solutions.',
    icon: 'cog',
    features: [
      'Web, mobile, and API test automation',
      'Framework development using Selenium, Cypress, UFT, TOSCA',
      'Replace repetitive testing with CI/CD-integrated scripts',
      'Custom test automation strategies',
    ],
  },
  {
    id: '3',
    title: 'CI/CD & DevOps Enablement',
    description: 'Streamline your development pipeline with our CI/CD and DevOps implementation services.',
    icon: 'git-branch',
    features: [
      'Azure DevOps, Jenkins, GitLab CI implementation',
      'Test orchestration and reporting integration',
      'Continuous delivery pipeline setup',
      'DevOps culture transformation',
    ],
  },
  {
    id: '4',
    title: 'End-to-End QA Management',
    description: 'Comprehensive quality assurance services across all stages of your software development lifecycle.',
    icon: 'check-circle',
    features: [
      'SIT, UAT, Production testing',
      'Performance and security testing with JMeter, LoadRunner, NeoLoad',
      'Test strategy development',
      'Quality metrics and reporting',
    ],
  },
];