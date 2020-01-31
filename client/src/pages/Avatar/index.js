import React, {useState, setState} from "react";
import Woman2 from "../../assets/Woman2";
import "./style.css";

export default function Avatar() {
    const [avatarVariables, setAvatarVariables] = useState({
        skinTone: "#fff",
        hairColor: "#ff00",
        backgroundColor: "#ff0000"
    })
    const skinToneArr = [];
    const hairColorArr = [];
    const backgroundColorArr = [];


    const woman3 = `<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" xmlns: serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xml: space="preserve" stroke-linejoin="round">
        <circle cx="50" cy="50" r="50" fill="${avatarVariables.backgroundColor}" />
        <path d="M50.067 97.585l11.511-14.165 -4.049-3.149 4.023-0.033 -0.088-10.836c0.067 0.031 0.134 0.061 0.201 0.093 0.049 0.024 0.097 0.048 0.146 0.071 0.109 0.053 0.218 0.107 0.326 0.161 0.06 0.031 0.12 0.062 0.18 0.093 0.096 0.05 0.192 0.1 0.287 0.15 0.064 0.035 0.128 0.069 0.192 0.104 0.091 0.05 0.182 0.1 0.272 0.151 0.064 0.036 0.128 0.072 0.192 0.109 0.091 0.052 0.181 0.106 0.271 0.159 0.061 0.036 0.122 0.072 0.183 0.109 0.097 0.059 0.194 0.119 0.291 0.18 0.051 0.032 0.103 0.064 0.155 0.097 0.147 0.094 0.293 0.188 0.438 0.285 6.273 4.196 10.402 11.345 10.402 19.457l0 10.177 -50-0.203 0.074-10.177c0.066-8.064 4.205-15.138 10.447-19.293 0.32 0.989 1.048 1.813 2.026 2.239 0.073 0.033 0.148 0.062 0.225 0.09 0.324 0.116 0.653 0.218 0.985 0.306l-0.052 6.478 4.023 0.033 -4.049 3.149 11.385 14.161 0 0.004 0.001-0.003 0.002 0.003Z" fill="#a31623" />
        <path d="M57.429 67.958c1.4 0.358 2.749 0.845 4.035 1.443l0 0.001 0.088 10.836 -4.023 0.033 4.049 3.149 -11.511 14.165 7.044-25.199 0.263-0.942 0.081-0.289 -0.026-3.196 0-0.001Zm-13.901 6.209l6.536 23.407 0 0.007 -11.385-14.161 4.049-3.149 -4.023-0.033 0.052-6.478c1.013 0.268 2.062 0.407 3.124 0.407l1.647 0Z" fill="#d22233" /><path d="M50.066 75.447c0 1.12 0 2.346 0 3.629l0-0.377 0-3.252Zm3.68 3.629l3.682-7.862 -0.38 1.359 -6.981 25.001 -0.001 0.005 -0.002 0.006 0-0.011c0-0.273 0.001-5.908 0.001-12.05 0 6.142-0.001 11.777-0.001 12.05l-6.536-23.407 0.618 2.21 2.24 2.699 3.68-4.404 3.68 4.404Z" fill="#e8e9ea" /><path d="M50.067 46.305c1.806-0.286 3.693-0.856 5.1-1.948 2.313-1.797 3.308-4.119 3.731-5.631 2.441 2.005 3.63 4.835 3.709 7.108l0 3.383 0.008 0 0 3.691c0 0.252-0.008 0.5-0.021 0.744 -0.001 0.017-0.001 0.033-0.002 0.05 -0.006 0.1-0.014 0.199-0.022 0.298 -0.003 0.033-0.005 0.066-0.008 0.099 -0.008 0.092-0.018 0.182-0.028 0.272 -0.004 0.04-0.008 0.08-0.013 0.119 -0.01 0.086-0.022 0.171-0.034 0.256 -0.006 0.043-0.011 0.086-0.018 0.128 -0.012 0.082-0.026 0.164-0.039 0.245 -0.008 0.044-0.016 0.089-0.024 0.133 -0.014 0.079-0.03 0.158-0.045 0.236 -0.009 0.045-0.019 0.09-0.028 0.134 -0.017 0.078-0.034 0.154-0.052 0.231 -0.01 0.044-0.021 0.088-0.031 0.132 -0.019 0.076-0.038 0.151-0.058 0.226 -0.011 0.044-0.023 0.087-0.035 0.13 -0.021 0.075-0.042 0.149-0.064 0.223 -0.012 0.042-0.026 0.084-0.039 0.126 -0.022 0.074-0.045 0.148-0.07 0.221 -0.013 0.04-0.027 0.079-0.04 0.119 -0.026 0.074-0.051 0.148-0.077 0.221 -0.014 0.036-0.028 0.073-0.041 0.109 -0.028 0.075-0.057 0.151-0.086 0.225 -0.012 0.029-0.024 0.058-0.035 0.087 -0.033 0.08-0.066 0.161-0.1 0.241 -0.001 0-0.001 0.001-0.001 0.002 -0.123 0.286-0.257 0.564-0.398 0.835 -0.016 0.029-0.031 0.059-0.046 0.088 -0.034 0.064-0.069 0.126-0.103 0.189 -0.022 0.038-0.043 0.077-0.065 0.115 -0.032 0.058-0.066 0.116-0.1 0.173 -0.025 0.042-0.049 0.084-0.074 0.126 -0.033 0.054-0.067 0.107-0.1 0.161 -0.027 0.043-0.054 0.087-0.082 0.13 -0.033 0.052-0.067 0.103-0.1 0.154 -0.029 0.044-0.059 0.088-0.088 0.131 -0.033 0.049-0.067 0.098-0.101 0.146 -0.031 0.045-0.063 0.09-0.094 0.134 -0.034 0.047-0.067 0.093-0.101 0.139 -0.033 0.045-0.067 0.09-0.1 0.134 -0.034 0.044-0.068 0.089-0.102 0.132 -0.035 0.046-0.071 0.091-0.106 0.136 -0.033 0.042-0.067 0.083-0.1 0.124 -0.038 0.047-0.077 0.094-0.115 0.14 -0.033 0.038-0.064 0.076-0.097 0.114 -0.041 0.049-0.083 0.097-0.125 0.145 -0.031 0.034-0.061 0.069-0.092 0.103 -0.047 0.053-0.094 0.104-0.141 0.155 -0.007 0.007-0.013 0.014-0.02 0.022l-0.04 0.043c-0.007 0.007-0.013 0.015-0.02 0.022 -0.056 0.06-0.114 0.119-0.171 0.178 -0.018 0.019-0.036 0.039-0.055 0.058 -0.459 0.468-0.943 0.898-1.44 1.291 -0.078 0.062-0.157 0.123-0.236 0.183 0.079-0.06 0.158-0.121 0.236-0.183l0 7.981c-0.017 0.077-0.035 0.153-0.054 0.23l-0.263 0.942c-0.02 0.063-0.042 0.125-0.063 0.187l0.38-1.359 -7.362 3.458 -6.275-2.947 0-5.117c-0.005-1.159-0.402-2.27-1.087-3.186l0-0.19c0.009 0.007 0.018 0.014 0.027 0.021 -0.009-0.007-0.018-0.014-0.027-0.021 -0.286-0.227-0.568-0.465-0.844-0.717 -0.005-0.005-0.01-0.009-0.015-0.014l-0.029-0.027c-0.005-0.004-0.01-0.009-0.015-0.013 -0.07-0.064-0.139-0.13-0.209-0.196 -0.003-0.003-0.005-0.005-0.008-0.007l-0.015-0.015c-0.002-0.002-0.005-0.005-0.007-0.007 -0.162-0.156-0.321-0.317-0.478-0.483 -0.014-0.014-0.028-0.03-0.042-0.045 -0.063-0.066-0.125-0.134-0.187-0.202 -0.017-0.02-0.036-0.04-0.053-0.06 -0.06-0.067-0.119-0.134-0.177-0.202 -0.016-0.019-0.032-0.037-0.048-0.056 -0.069-0.081-0.137-0.162-0.204-0.245 -0.004-0.005-0.008-0.01-0.012-0.015 -0.146-0.181-0.289-0.367-0.427-0.557 -0.013-0.018-0.026-0.035-0.038-0.053 -0.055-0.076-0.11-0.153-0.163-0.231 -0.015-0.022-0.03-0.044-0.045-0.066 -0.053-0.078-0.106-0.157-0.157-0.237 -0.013-0.019-0.025-0.037-0.037-0.056 -0.129-0.201-0.253-0.407-0.372-0.618 0-0.001 0-0.001-0.001-0.001 -0.057-0.102-0.113-0.205-0.168-0.309 -0.01-0.019-0.02-0.039-0.03-0.058 -0.046-0.087-0.09-0.176-0.134-0.265 -0.011-0.022-0.022-0.045-0.033-0.068 -0.045-0.092-0.088-0.184-0.131-0.278 -0.007-0.016-0.015-0.033-0.022-0.049 -0.102-0.227-0.198-0.459-0.287-0.696 -0.002-0.005-0.004-0.01-0.006-0.016 -0.041-0.109-0.08-0.219-0.118-0.33 -0.008-0.022-0.015-0.044-0.022-0.065 -0.033-0.098-0.065-0.197-0.095-0.296 -0.008-0.024-0.015-0.048-0.023-0.072 -0.031-0.106-0.062-0.212-0.091-0.319 -0.004-0.015-0.008-0.03-0.012-0.045 -0.068-0.251-0.128-0.508-0.181-0.769 -0.002-0.013-0.004-0.026-0.007-0.039 -0.022-0.113-0.043-0.228-0.063-0.343 -0.001-0.007-0.002-0.014-0.003-0.021l-0.007-0.041c-0.001-0.007-0.002-0.014-0.003-0.021 -0.017-0.104-0.033-0.209-0.047-0.314 -0.004-0.029-0.008-0.059-0.012-0.088 -0.015-0.114-0.028-0.228-0.04-0.343 -0.001-0.019-0.004-0.038-0.005-0.057 -0.042-0.422-0.063-0.855-0.063-1.3l0-6.827c0.018 0 4.799-0.003 8.004-1.841l-1.232 2.235c0 0 2.777 0.305 5.776-0.169l0.001 0Zm0 20.037 0.465-0.023c-0.164 0.016-0.319 0.023-0.465 0.023 0.132 0 0.273-0.006 0.421-0.019l0.044-0.004Zm-1.19-0.028l0.033 0.004 -0.033-0.004 -0.022-0.003 0.022 0.003Zm2.218-0.14c-0.028 0.006-0.055 0.012-0.082 0.018l0.029-0.006 0.053-0.012Zm-3.093-0.025c0.048 0.012 0.096 0.023 0.143 0.033 -0.047-0.01-0.095-0.021-0.143-0.033Zm-0.941-0.268c0.279 0.092 0.551 0.171 0.811 0.236 -0.243-0.061-0.495-0.134-0.755-0.218l-0.056-0.018Zm4.471 0.183c-0.021 0.006-0.041 0.012-0.062 0.017 0.021-0.005 0.041-0.011 0.062-0.017Zm0.062-0.017c0.033-0.009 0.066-0.018 0.1-0.028l-0.056 0.016 -0.044 0.012Zm0.492-0.148c-0.075 0.024-0.149 0.048-0.223 0.07l0.057-0.017c0.055-0.017 0.11-0.035 0.166-0.053Zm0.123-0.041c-0.039 0.014-0.078 0.026-0.117 0.039l0.058-0.019 0.059-0.02Zm-5.61-0.139c0.094 0.035 0.186 0.068 0.278 0.1 -0.073-0.026-0.146-0.052-0.219-0.078l-0.059-0.022Zm6.879-0.356c-0.373 0.166-0.739 0.311-1.093 0.435l0.059-0.021c0.355-0.126 0.722-0.274 1.096-0.442l-0.062 0.028Zm-7.593 0.07c0.111 0.048 0.222 0.094 0.333 0.139 -0.091-0.037-0.182-0.074-0.273-0.113l-0.06-0.026Zm-0.851-0.397c0.245 0.123 0.489 0.238 0.729 0.344l-0.06-0.027c-0.221-0.098-0.444-0.204-0.669-0.317Zm8.819 0.154c-0.036 0.018-0.072 0.035-0.108 0.052l0.046-0.022 0.062-0.03Zm-9.231-0.368c0.129 0.069 0.257 0.136 0.385 0.201 -0.128-0.065-0.256-0.132-0.385-0.201Zm10.631-0.384c-0.179 0.108-0.358 0.211-0.536 0.309 0.2-0.11 0.4-0.226 0.6-0.348l-0.064 0.039Zm-11.528-0.137c0.152 0.094 0.304 0.185 0.455 0.273 -0.151-0.088-0.303-0.179-0.455-0.273Zm11.975-0.142c-0.094 0.061-0.189 0.121-0.284 0.18 0.116-0.072 0.232-0.146 0.348-0.221l-0.064 0.041Zm-12.605-0.271c0.115 0.079 0.23 0.156 0.345 0.231 -0.115-0.075-0.23-0.152-0.345-0.231Zm-0.559-0.403c0.163 0.123 0.328 0.242 0.493 0.358 -0.186-0.13-0.371-0.265-0.555-0.404l0.062 0.046Zm-0.166-0.127l0.003 0.003 -0.004-0.003 -0.024-0.02 0.025 0.02Zm11.736 1.71c0.142-0.071 0.285-0.145 0.428-0.221 -0.165 0.088-0.329 0.172-0.492 0.252l0.064-0.031Zm2.356-1.432c-0.21 0.153-0.422 0.3-0.634 0.44l0.064-0.042c0.191-0.128 0.381-0.26 0.57-0.398Z" fill="${avatarVariables.skinTone}" /><path d="M43.791 74.167l0-2.442 6.275 2.947 -3.68 4.404 -2.24-2.699 -0.618-2.21 0.263 0Zm6.275 0.505l3.68 4.404 3.682-7.862 -7.362 3.458Z" fill="#fff" /><path d="M41.881 74.167c-1.062 0-2.111-0.139-3.124-0.407 -0.332-0.088-0.661-0.19-0.985-0.306 -0.077-0.028-0.152-0.057-0.225-0.09l0-19.566c0.009 0.138 0.02 0.274 0.034 0.409 0 0.005 0.001 0.009 0.001 0.014l0.003 0.029c0 0.004 0.001 0.009 0.001 0.014 0.012 0.115 0.025 0.229 0.04 0.343 0.004 0.029 0.008 0.059 0.012 0.088 0.014 0.105 0.03 0.21 0.047 0.314 0.004 0.028 0.009 0.055 0.013 0.083 0.02 0.115 0.041 0.23 0.063 0.343 0.003 0.013 0.005 0.026 0.007 0.039 0.053 0.261 0.113 0.518 0.181 0.769 0.004 0.015 0.008 0.03 0.012 0.045 0.029 0.107 0.06 0.213 0.091 0.319 0.002 0.006 0.004 0.012 0.006 0.018l0.011 0.036c0.002 0.006 0.004 0.012 0.006 0.018 0.03 0.099 0.062 0.198 0.095 0.296 0.007 0.021 0.014 0.043 0.022 0.065 0.038 0.111 0.077 0.221 0.118 0.33 0.002 0.006 0.004 0.011 0.006 0.016 0.089 0.237 0.185 0.468 0.287 0.696 0.007 0.016 0.015 0.033 0.022 0.049 0.043 0.094 0.086 0.186 0.131 0.278 0.011 0.023 0.022 0.046 0.033 0.068 0.044 0.089 0.088 0.178 0.134 0.265 0.003 0.005 0.005 0.01 0.008 0.014l0.015 0.03c0.002 0.004 0.005 0.009 0.007 0.014 0.055 0.104 0.111 0.207 0.168 0.309 0.001 0 0.001 0 0.001 0.001 0.119 0.211 0.243 0.417 0.372 0.618 0.012 0.019 0.024 0.037 0.037 0.056 0.051 0.08 0.104 0.159 0.157 0.237 0.015 0.022 0.03 0.044 0.045 0.066 0.053 0.078 0.108 0.155 0.163 0.231 0.012 0.018 0.025 0.035 0.038 0.053 0.138 0.19 0.281 0.376 0.427 0.557 0.004 0.005 0.008 0.01 0.012 0.015 0.067 0.083 0.135 0.164 0.204 0.245 0.016 0.019 0.032 0.037 0.048 0.056 0.058 0.068 0.117 0.135 0.177 0.202 0.017 0.02 0.036 0.04 0.053 0.06 0.062 0.068 0.124 0.136 0.187 0.202 0.014 0.015 0.028 0.031 0.042 0.045 0.157 0.166 0.316 0.327 0.478 0.483 0.003 0.002 0.005 0.005 0.008 0.007l0.015 0.015c0.002 0.002 0.005 0.004 0.007 0.007 0.07 0.066 0.139 0.132 0.209 0.196 0.02 0.018 0.039 0.036 0.059 0.054 0.008 0.007 0.016 0.015 0.025 0.022l0.048 0.045c0.009 0.008 0.017 0.015 0.025 0.023 0.276 0.248 0.526 0.522 0.746 0.817 0.685 0.916 1.082 2.027 1.087 3.186l0 7.559 -0.263 0 -1.647 0Zm-4.334-0.803c-0.978-0.426-1.706-1.25-2.026-2.239 -0.115-0.358-0.179-0.738-0.179-1.129l0-26.465c0-4.065 1.648-7.747 4.313-10.412 2.665-2.665 6.345-4.313 10.411-4.313l0 17.499c-2.999 0.474-5.776 0.169-5.776 0.169l1.232-2.235c-3.205 1.838-7.986 1.841-8.004 1.841l-0.001 0 0 6.828c0 0.302 0.01 0.599 0.03 0.89l0 19.566Zm12.519-27.059l0-17.499c8.133 0 14.725 6.592 14.725 14.725l0 26.445c0 0.41-0.068 0.812-0.193 1.188 -0.145-0.097-0.291-0.191-0.438-0.285 -0.052-0.033-0.104-0.065-0.155-0.097 -0.097-0.061-0.194-0.121-0.291-0.18 -0.061-0.037-0.122-0.073-0.183-0.109 -0.09-0.053-0.18-0.107-0.271-0.159 -0.064-0.037-0.128-0.073-0.192-0.109 -0.09-0.051-0.181-0.101-0.272-0.151 -0.064-0.035-0.128-0.069-0.192-0.104 -0.095-0.05-0.191-0.1-0.287-0.15 -0.06-0.031-0.12-0.062-0.18-0.093 -0.108-0.054-0.217-0.108-0.326-0.161 -0.049-0.023-0.097-0.047-0.146-0.071 -0.067-0.032-0.134-0.063-0.201-0.094 -1.286-0.598-2.635-1.085-4.035-1.443l-0.001 0 0-4.537c0.221-0.294 0.47-0.567 0.748-0.816 0.235-0.212 0.467-0.433 0.692-0.663 0.019-0.019 0.037-0.039 0.055-0.058 0.057-0.059 0.115-0.118 0.171-0.178 0.027-0.029 0.053-0.058 0.08-0.087 0.047-0.051 0.094-0.102 0.141-0.155 0.031-0.034 0.061-0.069 0.092-0.103 0.042-0.048 0.084-0.096 0.125-0.145 0.033-0.038 0.064-0.076 0.097-0.114 0.038-0.046 0.077-0.093 0.115-0.14 0.033-0.041 0.067-0.082 0.1-0.124 0.035-0.045 0.071-0.09 0.106-0.136 0.034-0.043 0.068-0.088 0.102-0.132 0.033-0.044 0.067-0.089 0.1-0.134 0.034-0.046 0.067-0.092 0.101-0.139 0.031-0.044 0.063-0.089 0.094-0.134 0.034-0.048 0.068-0.097 0.101-0.146 0.029-0.043 0.059-0.087 0.088-0.131 0.033-0.051 0.067-0.102 0.1-0.154 0.028-0.043 0.055-0.087 0.082-0.13 0.033-0.054 0.067-0.107 0.1-0.161 0.025-0.042 0.049-0.084 0.074-0.126 0.034-0.057 0.068-0.115 0.1-0.173 0.022-0.038 0.043-0.077 0.065-0.115 0.034-0.063 0.069-0.125 0.103-0.189 0.015-0.029 0.03-0.059 0.046-0.088 0.141-0.271 0.275-0.549 0.398-0.835 0-0.001 0-0.002 0.001-0.002 0.034-0.08 0.067-0.161 0.1-0.241 0.011-0.029 0.023-0.058 0.035-0.087 0.029-0.074 0.058-0.15 0.086-0.225 0.013-0.036 0.027-0.073 0.041-0.109 0.026-0.073 0.051-0.147 0.077-0.221 0.013-0.04 0.027-0.079 0.04-0.119 0.025-0.073 0.048-0.147 0.07-0.221 0.013-0.042 0.027-0.084 0.039-0.126 0.022-0.074 0.043-0.148 0.064-0.223 0.012-0.043 0.024-0.086 0.035-0.13 0.02-0.075 0.039-0.15 0.058-0.226 0.01-0.044 0.021-0.088 0.031-0.132 0.018-0.077 0.035-0.153 0.052-0.231 0.009-0.044 0.019-0.089 0.028-0.134 0.015-0.078 0.031-0.157 0.045-0.236 0.008-0.044 0.016-0.089 0.024-0.133 0.013-0.081 0.027-0.163 0.039-0.245 0.007-0.042 0.012-0.085 0.018-0.128 0.012-0.085 0.024-0.17 0.034-0.256 0.005-0.039 0.009-0.079 0.013-0.119 0.01-0.09 0.02-0.18 0.028-0.272 0.003-0.033 0.005-0.066 0.008-0.099 0.008-0.099 0.016-0.198 0.022-0.298 0.001-0.017 0.001-0.033 0.002-0.05 0.013-0.244 0.021-0.492 0.021-0.744l0-3.691 -0.008 0 0-3.383c-0.079-2.273-1.268-5.103-3.709-7.108 -0.423 1.512-1.418 3.834-3.731 5.631 -1.407 1.092-3.294 1.662-5.1 1.948l-0.001 0Z" fill="${avatarVariables.hairColor}" /><use xlink: href="#_Image1" x="50" y="29.132" width="25px" height="71.194px" transform="matrix(1,0,0,0.988806,0,0)"/><defs><image id="_Image1" width="25px" height="72px" xlink: href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAABICAYAAAADO14xAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACPElEQVRYhe2Y227DIAyGv5CsXbuTtou9/1NOU5M0uwAvzIEMEph20V+qekL5jI0NpgHegSswAgPwCfQUVAs8AsZ9vgNOwNn9P5SEaDXAEbh3oLEGRGSwM5vY4UKTOO7pF2OKQAAesO6rCgF4BrrakAbruqoQgIN7VYWAjU9RyMAyKQ9Y1xWDTNh80qBjKcgVW2oaN3by/kteZSkQf6yf9W0JSM/SWv/ByYsmNvCCdZNWyzy75MBrSyW4a3kwrhgXhQxY60wAGtL0+5AlJLcWJbtJtDXjb5AbpA4kO0/+7Uz+JBmrn1Z6/mAm2YBcSGgTKwq5krHdboFMzPtNFciE3dQ2uSkV0hPe64tCiugGKQ65sLPVTlmactAb3UsO4MnKcZdkvLTbyZvXGiR2QWCYcydpRiHIwFzS19x5AN5IqGk+RNq2zlk6RIzw1TnQamylsZGHy+Ccw4JxoGgnIC2atiR3B2yAVyJ1zjgL/DZNoFsq73PIOPG59Ckw9ytbttqOwEWPQKS7vXrvW3VGxccEPrfsr2kv/jO032UW8rvcTYpSXWiw11Yf8kVrVIPBrhp5peqkH+JL54gkZm6cJKmDkNDSld9yS/4pBFnr0Rvyl/U90IQgMQ3kH/Aa4KAhMUtj1yApajUkFI+ezOtAJaNLvZ7JGAHn6MdM9BKVpbypXYhBtOu2BHoV4pcS2Bdore+Y+Et3b6CXFPW9RKCjkJZygQ5CpJSUCvRCHfPxs2gcfMlppRpAIFUBAikeaK0vSfZcXnnFtPAAAAAASUVORK5CYII="/></defs></svg>`

    const woman4 =`<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" xmlns: serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xml: space="preserve" stroke-linejoin="round">
                <circle cx="50" cy="50" r="50" fill="${avatarVariables.backgroundColor}" />
                <path d="M49.999 81.11c3.71-2.569 6.476-5.659 7.383-9.769l0-3.264c2.597 0.665 5.018 1.763 7.186 3.213 6.29 4.207 10.432 11.374 10.432 19.509l0 9.201 -25.001 0 -24.999 0 0-9.201c0-8.05 4.057-15.152 10.236-19.376l0 12.957c0 9.572 10.553 10.361 10.553 10.361l0-8.932c0-1.402-0.356-2.78-1.039-4.003 -0.682-1.225-1.041-2.602-1.041-4.004l0-3.411c1.344 2.654 3.561 4.828 6.29 6.719Z" fill="#e8e9ea" />
                <path d="M43.875 64.237c0.055 0.036 0.111 0.071 0.166 0.106l-0.055-0.035c-0.019-0.012-0.037-0.024-0.056-0.035l-0.055-0.036Zm6.287 2.216l-0.016 0.001c0.02-0.001 0.039-0.002 0.058-0.003l-0.042 0.002Zm-0.525-0.01c0.025 0.002 0.051 0.004 0.075 0.005l-0.037-0.002 -0.038-0.003Zm-0.733-0.096c0.149 0.027 0.292 0.049 0.43 0.066 -0.124-0.015-0.254-0.035-0.387-0.058l-0.043-0.008Zm-0.356-0.072c0 0 0 0 0 0Zm-0.709-0.183c0.051 0.015 0.101 0.029 0.151 0.043 -0.066-0.019-0.133-0.038-0.2-0.058l0.049 0.015Zm4.484-0.051l-0.049 0.015 0.049-0.015 0.02-0.006 -0.02 0.006Zm-5.084-0.143c0.034 0.012 0.068 0.024 0.102 0.036l-0.051-0.018 -0.051-0.018Zm-0.155-0.054l0.027 0.009 -0.027-0.009Zm-0.155-0.058c0.017 0.007 0.035 0.013 0.052 0.02l-0.052-0.02c-0.017-0.006-0.035-0.013-0.052-0.019l0.052 0.019Zm6.341-0.077c-0.068 0.026-0.135 0.052-0.202 0.077 0.067-0.025 0.134-0.051 0.202-0.077Zm-6.656-0.045c0.058 0.023 0.116 0.046 0.174 0.069 -0.075-0.03-0.151-0.06-0.227-0.09l0.053 0.021Zm6.9-0.054l-0.055 0.023c0.039-0.016 0.078-0.032 0.117-0.048l-0.062 0.025Zm0.497-0.215l-0.03 0.014 0.03-0.014 0.062-0.029 -0.062 0.029Zm-8.249-0.104c0.049 0.023 0.098 0.046 0.147 0.068 -0.049-0.022-0.098-0.045-0.147-0.068Zm8.676-0.098c-0.055 0.027-0.11 0.054-0.165 0.08 0.055-0.026 0.11-0.053 0.165-0.08Zm0.306-0.154c-0.098 0.05-0.195 0.099-0.292 0.147l0.063-0.031c0.076-0.038 0.153-0.077 0.229-0.116Zm-9.936-0.241c0.235 0.132 0.469 0.255 0.702 0.37 -0.233-0.115-0.467-0.238-0.702-0.37Zm10.281 0.057c-0.099 0.054-0.197 0.107-0.295 0.158 0.098-0.051 0.196-0.104 0.295-0.158Zm-10.549-0.209c0.066 0.038 0.131 0.076 0.196 0.112 -0.047-0.026-0.093-0.053-0.14-0.08l-0.056-0.032Zm-0.413-0.249c0.05 0.031 0.1 0.062 0.15 0.092 -0.05-0.03-0.1-0.061-0.15-0.092Zm12.689-0.632c-0.021 0.015-0.042 0.031-0.063 0.046l0.063-0.046c0.021-0.015 0.042-0.03 0.063-0.046l-0.063 0.046Zm0.41-0.305l-0.014 0.01 0.014-0.01 0.02-0.016 -0.02 0.016Zm-7.368 2.995c0.024 0.001 0.048 0.001 0.071 0.001l-0.035 0 -0.036-0.001Zm-0.336-0.022c-0.04-0.003-0.081-0.008-0.123-0.012 0.055 0.006 0.109 0.011 0.162 0.016l-0.039-0.004Zm-1.111-0.189c-0.11-0.026-0.221-0.055-0.335-0.085 0.13 0.035 0.257 0.067 0.381 0.096l-0.046-0.011Zm-10.994-20.807l25.164 0 0 7.549c0 0.252-0.008 0.499-0.021 0.744 0 0.018-0.003 0.036-0.003 0.053 -0.005 0.1-0.012 0.198-0.02 0.297 -0.003 0.034-0.005 0.068-0.008 0.102 -0.01 0.091-0.018 0.18-0.028 0.27 -0.006 0.041-0.008 0.082-0.013 0.122 -0.011 0.085-0.024 0.17-0.034 0.255 -0.008 0.043-0.013 0.087-0.018 0.13 -0.013 0.082-0.026 0.163-0.041 0.244 -0.008 0.045-0.016 0.09-0.024 0.134 -0.012 0.08-0.028 0.158-0.046 0.236 -0.008 0.046-0.018 0.091-0.026 0.136 -0.018 0.077-0.034 0.153-0.052 0.23 -0.01 0.045-0.02 0.089-0.033 0.134 -0.018 0.076-0.036 0.151-0.057 0.225 -0.01 0.044-0.023 0.088-0.036 0.132 -0.021 0.074-0.042 0.149-0.062 0.222 -0.013 0.043-0.026 0.085-0.039 0.127 -0.023 0.074-0.047 0.148-0.07 0.221 -0.015 0.04-0.028 0.08-0.041 0.121l-0.078 0.22c-0.013 0.037-0.028 0.074-0.041 0.111 -0.028 0.075-0.057 0.15-0.085 0.224 -0.013 0.03-0.026 0.059-0.036 0.088 -0.034 0.081-0.068 0.161-0.101 0.241l0 0.002c-0.124 0.285-0.256 0.562-0.398 0.832 -0.016 0.031-0.031 0.063-0.049 0.094 -0.031 0.063-0.067 0.125-0.101 0.187 -0.023 0.039-0.044 0.079-0.065 0.118 -0.033 0.058-0.067 0.115-0.1 0.172 -0.026 0.042-0.05 0.085-0.075 0.126 -0.034 0.055-0.068 0.108-0.101 0.162 -0.026 0.044-0.054 0.088-0.083 0.131 -0.031 0.051-0.064 0.102-0.098 0.153 -0.031 0.045-0.059 0.089-0.09 0.134 -0.034 0.048-0.068 0.096-0.101 0.144 -0.031 0.046-0.062 0.091-0.096 0.136 -0.031 0.046-0.064 0.092-0.098 0.138 -0.034 0.045-0.07 0.091-0.103 0.136 -0.008 0.011-0.017 0.022-0.025 0.033l-0.049 0.065c-0.008 0.011-0.016 0.022-0.025 0.033 -0.036 0.046-0.072 0.092-0.108 0.138 -0.034 0.041-0.067 0.082-0.101 0.123 -0.01 0.012-0.019 0.024-0.029 0.035l-0.058 0.071c-0.01 0.012-0.019 0.023-0.029 0.035 -0.031 0.038-0.062 0.076-0.096 0.114 -0.041 0.049-0.085 0.098-0.126 0.146 -0.008 0.009-0.015 0.017-0.023 0.026l-0.045 0.051c-0.008 0.008-0.015 0.017-0.023 0.025 -0.046 0.053-0.096 0.105-0.145 0.158 -0.025 0.028-0.051 0.056-0.077 0.085 -0.057 0.061-0.116 0.122-0.173 0.182 -0.018 0.018-0.036 0.036-0.052 0.054 -0.463 0.47-0.946 0.901-1.444 1.294l0 8.003c-0.907 4.11-3.673 7.2-7.383 9.769 -2.729-1.891-4.946-4.065-6.29-6.719l0-10.263c0.037 0.025 0.074 0.049 0.111 0.073l-0.056-0.036c-0.018-0.013-0.037-0.025-0.055-0.037 -0.308-0.202-0.615-0.42-0.917-0.653 -2.838-2.18-5.306-5.583-5.373-10.289 -0.002-0.066-0.002-0.133-0.002-0.2l0-7.549Z" fill="${avatarVariables.skinTone}" />
                <path d="M64.764 49.285l-0.002 0 0 20.814c0 0.412-0.067 0.813-0.194 1.191 -2.168-1.45-4.589-2.548-7.186-3.213l0-4.55c0.219-0.294 0.47-0.569 0.749-0.818 0.235-0.213 0.468-0.434 0.695-0.665 0.016-0.018 0.034-0.036 0.052-0.054 0.057-0.06 0.116-0.121 0.173-0.182 0.026-0.029 0.052-0.057 0.077-0.085 0.049-0.053 0.099-0.105 0.145-0.158 0.031-0.034 0.06-0.068 0.091-0.102 0.041-0.048 0.085-0.097 0.126-0.146 0.034-0.038 0.065-0.076 0.096-0.114 0.01-0.012 0.019-0.024 0.029-0.035l0.058-0.071c0.01-0.012 0.019-0.023 0.029-0.035 0.034-0.041 0.067-0.082 0.101-0.123 0.036-0.046 0.072-0.092 0.108-0.138 0.034-0.044 0.065-0.087 0.099-0.131 0.033-0.045 0.069-0.091 0.103-0.136 0.034-0.046 0.067-0.092 0.098-0.138 0.034-0.045 0.065-0.09 0.096-0.136 0.033-0.048 0.067-0.096 0.101-0.144 0.031-0.045 0.059-0.089 0.09-0.134 0.034-0.051 0.067-0.102 0.098-0.153 0.029-0.043 0.057-0.087 0.083-0.131 0.033-0.054 0.067-0.107 0.101-0.162 0.025-0.041 0.049-0.084 0.075-0.126 0.033-0.057 0.067-0.114 0.1-0.172 0.021-0.039 0.042-0.079 0.065-0.118 0.034-0.062 0.07-0.124 0.101-0.187 0.018-0.031 0.033-0.063 0.049-0.094 0.142-0.27 0.274-0.547 0.398-0.832l0-0.002c0.033-0.08 0.067-0.16 0.101-0.241 0.01-0.029 0.023-0.058 0.036-0.088 0.028-0.074 0.057-0.149 0.085-0.224 0.013-0.037 0.028-0.074 0.041-0.111 0.026-0.073 0.052-0.147 0.078-0.22 0.013-0.041 0.026-0.081 0.041-0.121 0.023-0.073 0.047-0.147 0.07-0.221 0.013-0.042 0.026-0.084 0.039-0.127 0.02-0.073 0.041-0.148 0.062-0.222 0.013-0.044 0.026-0.088 0.036-0.132 0.021-0.074 0.039-0.149 0.057-0.225 0.013-0.045 0.023-0.089 0.033-0.134 0.018-0.077 0.034-0.153 0.052-0.23 0.008-0.045 0.018-0.09 0.026-0.136 0.018-0.078 0.034-0.156 0.046-0.236 0.008-0.044 0.016-0.089 0.024-0.134 0.015-0.081 0.028-0.162 0.041-0.244 0.005-0.043 0.01-0.087 0.018-0.13 0.01-0.085 0.023-0.17 0.034-0.255 0.005-0.04 0.007-0.081 0.013-0.122 0.01-0.09 0.018-0.179 0.028-0.27 0.003-0.034 0.005-0.068 0.008-0.102 0.008-0.099 0.015-0.197 0.02-0.297 0-0.017 0.003-0.035 0.003-0.053 0.013-0.245 0.021-0.492 0.021-0.744l0-7.549 -25.164 0 0 7.549c0 0.067 0 0.134 0.002 0.2 0.067 4.706 2.535 8.109 5.373 10.289 0.302 0.233 0.609 0.451 0.917 0.653l0 13.674c0 1.402 0.359 2.779 1.041 4.004 0.683 1.223 1.039 2.601 1.039 4.003l0 8.932c-0.013-0.001-10.553-0.795-10.553-10.361l0-38.943c-0.039-8.236 5.434-14.938 12.199-14.938l2.564 0 0 4.528 0-4.528 2.566 0c6.674 0 12.096 6.524 12.197 14.618 0 0.075 0.002 0.15 0.002 0.225l0 3.943Z" fill="${avatarVariables.hairColor}" />
                <use xlink: href="#_Image1" x="50" y="30.718" width="25px" height="69.501px" transform="matrix(1,0,0,0.992871,0,0)"/>
                <defs>
                    <image id="_Image1" width="25px" height="70px" xlink: href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAABGCAYAAAA5MT9BAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABvElEQVRYhe2YbU/CMBDHf2MIyIMxIj5GEzUmxu//tXwFCEwcvmhnlmVsvdvaEMI/WchCb7/epb3rNQI+gSFGiX3mwBewpgXFwAw4y733gAlwY+EL4LdNSFED4BrY0MCrjuNE3oArn5BMr8DYNwTgKQRkBEx9QwAepXYaSA+49Q0BYci0kIHEVgvJQN4h5yEgw/ohzSHOnnSB1D6uWmKytPMEu3ZwE49q5fXjJ8hxQaIQkF0IiFgaSOwbkiJI8VrIt8JGbNCVAqSQBYpQSSAJgvqhgWwxe0O8qjLVxTixgL4WAPWebJoCXCDiPKWBtKKDgIgzrgYSASsaNqcuaSLbhDsL67O/kVVDMkWYnjHF9PmJq2FduMr+72BOkBMcU00VZEv1oboHfAAXTSCrOmNMPnvHXChUDiq7kUjtBFySYgRc2t952YB9niwx4ZDonj29ZBlkjfLmAXimJKEWIRvMstYmxhh4KdrnIT/2XVXHcxoDd2WQlaWLdnKFHsjtoQ7mmDOguQd5RZhV+w8Z0lJxKmhqv++1nsSY/eO9aM1CQCZAP0T5HYWA9EJAgoQrCOR4whUdxAnyBDlBDhzyBx4dLSPsYQizAAAAAElFTkSuQmCC"/>
                </defs>
            </svg>`

    return (
        <div className="avatarSelection">
            <div className="choosePhoto">
                <h2><span>Step #1</span>Choose your photo</h2>
                <img src="images/avatars/woman1.svg" alt="Select Woman #1"/>
                <img src="images/avatars/woman2.svg" alt="Select Woman #2"/>
                <img src="images/avatars/woman3.svg" alt="Select Woman #3"/>
                <Woman2 {...avatarVariables}/>
                {woman4}
                <img src="images/avatars/man1.svg" alt="Select Woman #1"/>
                <img src="images/avatars/man2.svg" alt="Select Woman #2"/>
                <img src="images/avatars/man3.svg" alt="Select Woman #3"/>
            </div>
            <div className="selectedAvatar">
                <img src="images/woman1.svg" alt="Select Woman #1" className="avatarSelection"/>
                <div className="hairColor">
                    <h3>Choose a hair color</h3>
                </div>
                <div className="skinTone">
                    <h3>Choose a skin tone</h3>
                </div>
                <div className="backgroundColor">
                    <h3>Choose a background color</h3>
                </div>
            </div>
        </div>
    )
}