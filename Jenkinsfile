pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/react-test-aws-jenkins"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/react-test-aws-jenkins/"
            }
        }
    }
}