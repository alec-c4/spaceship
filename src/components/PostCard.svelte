<script lang="ts">
  import { formatDate } from '@/lib/utils/date';
  import { getLangFlag } from '@/lib/utils/lang';

  interface Props {
    post: {
      id: string;
      body?: string;
      data: {
        title: string;
        description: string;
        pubDate: Date;
        tags: string[];
        featured?: boolean;
        draft?: boolean;
        lang?: string;
      };
    };
    readTime: string;
    slug: string;
  }

  let { post, readTime, slug }: Props = $props();
</script>

<article
  class="group relative -mx-4 px-4 py-3 sm:py-4 rounded-2xl hover:bg-accent transition-all duration-300"
>
  <div class="flex flex-col gap-1.5">
    <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
      <h2 class="text-base sm:text-lg font-black tracking-tight leading-tight">
        <a href={`/posts/${slug}`} class="transition-colors no-underline">
          <span class="absolute -inset-x-0 -inset-y-0 z-20"></span>
          <span class="relative z-10 text-foreground group-hover:text-primary transition-colors"
            >{post.data.title}</span
          >
        </a>
      </h2>
      <time
        datetime={post.data.pubDate.toISOString()}
        class="flex-shrink-0 text-xs font-medium text-muted-foreground tabular-nums uppercase tracking-widest"
      >
        {formatDate(post.data.pubDate)}
      </time>
    </div>

    <p
      class="relative z-10 text-[13px] sm:text-sm leading-relaxed text-muted-foreground line-clamp-2 max-w-[95%]"
    >
      {post.data.description}
    </p>

    <div
      class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1.5"
    >
      {#if post.data.featured}
        <div class="flex items-center gap-1 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          Featured
        </div>
        <span class="hidden sm:inline text-border">•</span>
      {/if}

      {#if post.data.draft}
        <div class="flex items-center gap-1 text-amber-600 dark:text-amber-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          Draft
        </div>
        <span class="hidden sm:inline text-border">•</span>
      {/if}

      <div class="flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        {readTime}
      </div>

      <span class="hidden sm:inline text-border">•</span>

      <div class="flex gap-3">
        {#each post.data.tags.slice(0, 3) as tag (tag)}
          <span class="hover:text-primary transition-colors cursor-pointer">#{tag}</span>
        {/each}
      </div>

      {#if post.data.lang && post.data.lang !== 'en'}
        <span class="hidden sm:inline text-border">•</span>
        <div
          class="flex items-center gap-1.5 transition-all cursor-help"
          title={`Language: ${post.data.lang}`}
        >
          <span class="text-sm leading-none">{getLangFlag(post.data.lang)}</span>
          <span class="text-[10px] opacity-70 uppercase">{post.data.lang}</span>
        </div>
      {/if}
    </div>
  </div>
</article>
