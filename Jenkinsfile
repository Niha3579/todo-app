pipeline {
    agent any 
    stages {
        stage('Build'){
            steps{
                script{
                    bat "docker build -todoapp ."
                }
            }
        }
        stage('run'){
            steps{
                script{
                    echo "running."
                }
            }
        }
        stage('test'){
            steps{
                script{
                    echo "testing."
                }
            }
        }
        stage('deploy'){
            steps{
                script{
                    echo "deploying."
                }
            }
        }
    }
}
