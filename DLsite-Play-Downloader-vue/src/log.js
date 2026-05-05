import { ref } from "vue";
import { unsafeWindow } from "$";
export function useLog() {
    const log_list = ref([])

    function add_log(text) {
        log_list.value.unshift(text);
    }
    function clear_log() {
        log_list.value = [];
    }
    unsafeWindow.add_log = add_log

    return {
        log_list,
        add_log,
        clear_log,
    }
}
