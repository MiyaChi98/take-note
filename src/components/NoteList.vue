<template>
    <div>
        <a-list item-layout="horizontal" :data-source="notes" header="All Notes">
            <template #renderItem="{ item }">
                <a-list-item>
                    <div>
                        <a-typography-text strong>date: {{ item.time }}</a-typography-text>
                        <a-typography-paragraph v-model:content="item.content" editable>
                            <template #editableIcon>
                                <HighlightOutlined />
                            </template>
                            <template #editableTooltip>click to edit text</template>
                        </a-typography-paragraph>
                    </div>
                </a-list-item>
            </template>
        </a-list>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { HighlightOutlined } from '@ant-design/icons-vue';

// Define props
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    notes: {
        type: Array,
        default: () => []
    }
});
</script>
<style>

</style>