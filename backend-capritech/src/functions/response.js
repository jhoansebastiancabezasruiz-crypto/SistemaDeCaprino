class Response {
    constructor(message, info = {}, error = null) {
        this.message = message;
        this.info = info;
        this.error = error;
    }

    get json() {
        return {
            message: this.message,
            info: this.info,
            error: this.error
        };
    }

    get success() {
        return {
            success: true,
            code: 0,
            message: this.message,
            info: this.info,
            error: this.error
        };
    }
}

module.exports = Response;