# So that anecdote thing?

This project aims to make it easy to set up on Azure!

## Parameters

Some environment variables are required when running this project so that it can authenticate to Azure 
and target the correct resources. 

### AZURE_ACTIVE_DIRECTORY_ID
This is the guid of the Azure Active Directory you wish to authenticate via.

### AZURE_DEPLOYMENT_APPLICATION_ID
This is the guid of an application principal that you have granted access to your subscription.

### AZURE_DEPLOYMENT_APPLICATION_SECRET
This is any valid token that is currently active for the application principal you have chosen.

### ANECDOTE_AZURE_DEPLOYMENT_NAME
This is a toplevel application handle in `kebab-case` that will be used as a convention and prefix for 
resources created.  Most notably, this will be the name of your resource group.

## Commands

### login
As I'm sure you can guess, this populates Azure's authentication state in the project via the `az` command.
All subsequent commands run in the project directory will run as the user you log in as. 

### validate-deployment
Performs a sanity check on `azuredeploy.json`

### build-functions
This will perform any necessary tasks to prepare the scripts that get sent over to Azure. Most notably, 
`yarn upgrade`.

### ensure-deployment
Provision and/or update all infrastructure necessary.  This operation should always be idempotent and is 
fine to be rerun against existing installations.

### deploy-functions
Compress and send over all artifacts to their destinations.  After this step is completed, you should be 
able to see all your code in action!


