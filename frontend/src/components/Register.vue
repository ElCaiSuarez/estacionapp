<script setup>
</script>

<template>
    <div>
        <h1>This is a register page</h1>
        <form class="row-auto">
            <div class="col-auto">
                <label for="inputUserName" class="form-label">User Name</label>
                <input type="text" class="form-control" id="inputUserName">
            </div>
            <div class="col-auto">
                <label for="inputEmail" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail">
            </div>
            <div class="col-auto">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="inputPassword"><br />
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </form>
    </div>
</template>