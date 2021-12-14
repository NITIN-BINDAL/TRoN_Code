# TRoN
A project aimed at generating realistic human voices conditioned on age groups and gender.

# Setting up the project

## Cloning the Repository

Type the following command in order to clone the repository on you local machine. Make sure you have `git` installed before running the following command. To downlaod git head over to [git-scm.com](https://git-scm.com)

```bash
git clone https://github.com/NITIN-BINDAL/TRoN_Code.git
```
Now change the current directory to project's directory by typing

```bash
cd TRoN
```
Once the cloning and changing directory is complete, open two terminals namely `terminal 1` and `termianl 2`.

## Setting up the Client Side

Make sure you have `NPM` and `Node.js` installed on your system. Also, ensure that you have a stable version of any good web browser such as Chrome, Firefox, etc.

### Change the present working directory
Change the present working directory in `terminal 1` to `tron-client` by typing the following command

```bash
cd tron-client
```

### Installing dependencies

Run the following command to install all the dependencies

```bash
npm i
```
In case there is an issue in the installation, delete `package-lock.json` and try again.

### Starting the React Development Server
Run the following command to start the React Development server

```bash
npm run start
```

Once the command executes, head over to `localhost:3000` to access the client application.


## Setting up the Backend

Make sure you have `python3.6^` on your system.

### Adding dependencies
```bash
sudo add-apt-repository universe
sudo add-apt-repository ppa:deadsnakes/ppa
```

### Installing required software

```bash
snap install ffmpeg
sudo apt install python3.6 python3.6-dev python3 python3-pip git
pip3 install virtualenv
```

```bash
sudo apt install libasound2-dev
git clone -b alsapatch https://github.com/gglockner/portaudio
cd portaudio
./configure && make
sudo make install
sudo ldconfig
cd ..
```

```bash
sudo apt install --reinstall libxcb-xinerama0
```

### Creating virtual environment and activating it
```bash
~/.local/bin/virtualenv --python python36 env
source env/bin/activate
```

Once activated, the name should be visible as `(env)` before the terminal `$`.

### Changing to  server directory

```bash
cd tron-server
```

### Installing Pretrained Model

Head over to [Pretrained Models](https://drive.google.com/file/d/19my-8sjPpFX8rRXf3l0L9QaAdlexnhdY/view?usp=sharing) and download the zip file inside `tron-server` folder. This is done since `git` does not allow files larger than 50mb to be pushed.

```bash
unzip Model.zip
```

### Installing dependencies

Run the following to install all the required packages.

```bash
pip3 install -r requirements.txt
```

### Starting the server

```bash
python3 server.py
```
