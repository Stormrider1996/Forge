# Demo

## Show pipelines location
    CI/CD -> Pipelines

- pipeline list
- scheduled pipelines
- artifacts location
- clear runner caches
- run new pipeline
- single pipeline: 
    - unique id
    - status
    - commit
    - related MR
    - retry
    - job ordered per stages
    - retry failed job
    - artifacts

## Single pipeline
- unique id
- status
- commit
- related MR
- retry
- job ordered per stages
- dependencies between jobs

## Jobs
- logs
- duration
- other jobs in pipeline
- restart job
- interprete logs:
    - which runner
    - following logs compared to Barrage template

## Basic troubleshooting for failed pipelines/jobs
(TODO find examples for each)
- grpc agent error [E1](https://git.barrage.net/travelspot/backoffice-frontend/-/jobs/224938)
- job timeout
- yaml [E1](https://git.barrage.net/travelspot/public-webapp/-/pipelines/52571)
- runner out of memory [E1](https://git.barrage.net/travelspot/public-webapp/-/jobs/255553) [E2](https://git.barrage.net/hive/hive-api/-/jobs/255651) [E3](https://git.barrage.net/barrage/barrage-front/-/jobs/255574)
- syntax/logic error or some unhandled event [E1](https://git.barrage.net/travelspot/backend/-/jobs/255598) [E2](https://git.barrage.net/travelspot/public-webapp/-/jobs/209162)
- random runner fault [E1](https://git.barrage.net/travelspot/public-webapp/-/jobs/255564)


### Common errors on build jobs
- build command fails (either missing variable, missing file, dependency or timeout, mostly error is in dockerfile) [E1](https://git.barrage.net/cloud-zero/web/-/jobs/255792) [E2](https://git.barrage.net/cloud-zero/web/-/jobs/255698) [E3](https://git.barrage.net/cloud-zero/web/-/jobs/255546) [E4](https://git.barrage.net/hive/hpc-frontend/-/jobs/235671)

### Common errors on deploy jobs
- timed out waiting for condition [E1](https://git.barrage.net/hive/hive-api/-/jobs/255655) [E2](https://git.barrage.net/roango/roango-api/-/jobs/235118)
- service account/ingress/secret already exists [E1](https://git.barrage.net/hive/hpc-frontend/-/jobs/230966)
- missing resources [E1](https://git.barrage.net/hive/hpc-frontend/-/jobs/224669) [E2](https://git.barrage.net/roango/roango-web/-/jobs/131670)
- terminating namespace [E1](https://git.barrage.net/travelspot/public-webapp/-/jobs/216949)
- install/upgrade already in progress [E1](https://git.barrage.net/travelspot/public-webapp/-/jobs/255541) [E2](https://git.barrage.net/travelspot/public-webapp/-/jobs/255585)

## Barrage customized AutoDeploy template
https://git.barrage.net/barrage/gitlab-ci-templates


# Examples

## Setup a deployment for an app using the `DeploySimple` Barrage template
gitlab/deploy-simple.yml

## Setup a deployment for an app using the `DeployCustom` Barrage template
gitlab/deploy-custom.yml

