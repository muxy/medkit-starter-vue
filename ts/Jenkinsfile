pipeline {
  agent {
    node {
      label 'nodejs'
      customWorkspace "/home/jenkins/workspace/${JOB_NAME}/builds/${BUILD_ID}"
    }
  }

  tools {
    nodejs "14.8.0"
  }

  options {
    skipDefaultCheckout(true)
  }

  stages {
    stage('Checkout') {
      steps {
        sshagent (credentials: ['21aef44b-c34e-48c1-8c49-92e423a97a45']) {
          echo 'Checking out latest'

          checkout scm
        }
      }
    }

    stage('Build') {
      steps {
        script {
          def envFile = readFile('.env').split('\n') as List

          withEnv(envFile) {
            echo 'Building staging extension'

            // The --build-arg params shouldn't have to be this verbose, but Jenkins currently throws an exception if their values aren't explicit
            def resultImage = docker.build('PROJECT_NAME', '--build-arg VUE_APP_CLIENT_ID=$VUE_APP_CLIENT_ID --build-arg VUE_APP_UA_STRING=$VUE_APP_UA_STRING .')
            resultImage.inside('-u root -v ${WORKSPACE}:/out') {
              sh 'cp -r /dist /out'
            }
          }
        }
      }
    }

    stage('Push') {
      when {
        expression { return env.BRANCH_NAME ==~ /(master|production|)/ }
      }

      steps {
        echo 'Pushing staging extension to s3'

        withAWS(credentials: '71969651-699d-4599-932c-123ac18ad63b') {
          script {
            s3Upload(file: 'dist', bucket: 'mbt-ext-staging', path: 'PROJECT_NAME/', acl: 'PublicRead', excludePathPattern: '**/*.zip')
          }
        }
      }
    }
  }
}
