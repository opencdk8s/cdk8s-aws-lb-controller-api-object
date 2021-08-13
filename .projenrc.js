const { ConstructLibraryCdk8s } = require('projen');

const project = new ConstructLibraryCdk8s({
  author: 'Hunter Thompson',
  authorAddress: 'aatman@auroville.org.in',
  cdk8sVersion: '1.0.0-beta.24',
  cdk8sPlusVersion: '1.0.0-beta.28',
  constructsVersion: '3.3.80',
  defaultReleaseBranch: 'development',
  stability: 'experimental',
  jsiiFqn: 'projen.ConstructLibraryCdk8s',
  name: '@opencdk8s/cdk8s-aws-lb-controller-api-object',
  npmAccess: 'public',
  repositoryUrl: 'https://github.com/opencdk8s/cdk8s-aws-lb-controller-api-object',

  python: {
    distName: 'cdk8s-aws-lb-controller-api-object',
    module: 'cdk8s_aws_lb_controller_api_object',
  },
  publishToGo: {
    gitUserName: 'sc-infra-bot',
    gitUserEmail: 'infra@smallcase.com',
    moduleName: 'github.com/opencdk8s/cdk8s-aws-lb-controller-api-object-go',
  },
  releaseEveryCommit: true,
  pullRequestTemplate: false,
  clobber: false,
  readme: true,
});

const common_exclude = ['cdk.out', 'package.json', 'yarn-error.log', 'coverage', '.DS_Store', '.idea', '.vs_code'];
project.gitignore.exclude(...common_exclude);

project.synth();
