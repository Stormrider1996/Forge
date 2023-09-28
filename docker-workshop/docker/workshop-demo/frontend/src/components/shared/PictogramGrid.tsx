import { Pictogram } from '@components'
import { breakpoints, colors } from '@variables'
import styled from 'styled-components'

const PDPictogramGrid = styled.div`
  display: grid;
  grid-column: 1/-1;
  grid-row: 1;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  pointer-events: none;
  position: relative;
  z-index: -1;

  @media (min-width: ${breakpoints.laptop}) {
    grid-column: 4/13;
    grid-template-columns: repeat(18, 1fr);
  }
`

const Box = styled.div`
  border-bottom: 0.0625rem solid ${colors.shades.light.x200};
  border-left: 0.0625rem solid ${colors.shades.light.x200};
  flex-shrink: 0;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  * {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export const PictogramGrid = () => {
  return (
    <PDPictogramGrid>
      {/*
       * Row 1
       */}
      <Box className="illustration-box illustration-box-1"></Box>
      <Box className="illustration-box illustration-box-2"></Box>
      <Box className="illustration-box illustration-box-3"></Box>
      <Box className="illustration-box illustration-box-4"></Box>
      <Box className="illustration-box illustration-box-5">
        <Pictogram animationDelay="-0.3s" iconName="icon-nuclear-power" />
      </Box>
      <Box className="illustration-box illustration-box-6"></Box>
      <Box className="illustration-box illustration-box-7"></Box>
      <Box className="illustration-box illustration-box-8"></Box>
      <Box className="illustration-box illustration-box-9"></Box>
      <Box className="illustration-box illustration-box-10"></Box>
      <Box className="illustration-box illustration-box-11"></Box>
      <Box className="illustration-box illustration-box-12"></Box>
      <Box className="illustration-box illustration-box-13"></Box>
      <Box className="illustration-box illustration-box-14"></Box>
      <Box className="illustration-box illustration-box-15"></Box>
      <Box className="illustration-box illustration-box-16"></Box>
      <Box className="illustration-box illustration-box-17"></Box>
      <Box className="illustration-box illustration-box-18"></Box>
      {/*
       * Row 2
       */}
      <Box className="illustration-box illustration-box-19"></Box>
      <Box className="illustration-box illustration-box-20"></Box>
      <Box className="illustration-box illustration-box-21"></Box>
      <Box className="illustration-box illustration-box-22"></Box>
      <Box className="illustration-box illustration-box-23"></Box>
      <Box className="illustration-box illustration-box-24"></Box>
      <Box className="illustration-box illustration-box-25"></Box>
      <Box className="illustration-box illustration-box-26"></Box>
      <Box className="illustration-box illustration-box-27"></Box>
      <Box className="illustration-box illustration-box-28"></Box>
      <Box className="illustration-box illustration-box-29"></Box>
      <Box className="illustration-box illustration-box-30"></Box>
      <Box className="illustration-box illustration-box-31"></Box>
      <Box className="illustration-box illustration-box-32"></Box>
      <Box className="illustration-box illustration-box-33">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-34"></Box>
      <Box className="illustration-box illustration-box-35"></Box>
      <Box className="illustration-box illustration-box-36"></Box>
      {/*
       * Row 3
       */}
      <Box className="illustration-box illustration-box-37"></Box>
      <Box className="illustration-box illustration-box-38"></Box>
      <Box className="illustration-box illustration-box-39"></Box>
      <Box className="illustration-box illustration-box-40"></Box>
      <Box className="illustration-box illustration-box-41"></Box>
      <Box className="illustration-box illustration-box-42"></Box>
      <Box className="illustration-box illustration-box-43">
        <Pictogram iconName="icon-hydro-power" />
      </Box>
      <Box className="illustration-box illustration-box-44"></Box>
      <Box className="illustration-box illustration-box-45">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-46">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-47"></Box>
      <Box className="illustration-box illustration-box-48"></Box>
      <Box className="illustration-box illustration-box-49">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-50"></Box>
      <Box className="illustration-box illustration-box-51"></Box>
      <Box className="illustration-box illustration-box-52"></Box>
      <Box className="illustration-box illustration-box-53"></Box>
      <Box className="illustration-box illustration-box-54">
        <Pictogram iconName="icon-data-center" />
      </Box>
      {/*
       * Row 4
       */}
      <Box className="illustration-box illustration-box-55"></Box>
      <Box className="illustration-box illustration-box-56"></Box>
      <Box className="illustration-box illustration-box-57"></Box>
      <Box className="illustration-box illustration-box-58"></Box>
      <Box className="illustration-box illustration-box-59"></Box>
      <Box className="illustration-box illustration-box-60"></Box>
      <Box className="illustration-box illustration-box-61"></Box>
      <Box className="illustration-box illustration-box-62"></Box>
      <Box className="illustration-box illustration-box-63">
        <Pictogram iconName="icon-data-center-loading" />
      </Box>
      <Box className="illustration-box illustration-box-64">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-65"></Box>
      <Box className="illustration-box illustration-box-66"></Box>
      <Box className="illustration-box illustration-box-67"></Box>
      <Box className="illustration-box illustration-box-68"></Box>
      <Box className="illustration-box illustration-box-69"></Box>
      <Box className="illustration-box illustration-box-70"></Box>
      <Box className="illustration-box illustration-box-71"></Box>
      <Box className="illustration-box illustration-box-72"></Box>
      {/*
       * Row 5
       */}

      <Box className="illustration-box illustration-box-73"></Box>
      <Box className="illustration-box illustration-box-74"></Box>
      <Box className="illustration-box illustration-box-75"></Box>
      <Box className="illustration-box illustration-box-76"></Box>
      <Box className="illustration-box illustration-box-77">
        <Pictogram animationDelay="-0.6s" iconName="icon-nuclear-power" />
      </Box>
      <Box className="illustration-box illustration-box-78"></Box>
      <Box className="illustration-box illustration-box-79"></Box>
      <Box className="illustration-box illustration-box-80"></Box>
      <Box className="illustration-box illustration-box-81">
        <Pictogram animationDelay=".2s" iconName="icon-wind-power" />
      </Box>
      <Box className="illustration-box illustration-box-82"></Box>
      <Box className="illustration-box illustration-box-83"></Box>
      <Box className="illustration-box illustration-box-84"></Box>
      <Box className="illustration-box illustration-box-85">
        <Pictogram iconName="icon-hydro-power" />
      </Box>
      <Box className="illustration-box illustration-box-86"></Box>
      <Box className="illustration-box illustration-box-87">
        <Pictogram animationDelay=".4s" iconName="icon-wind-power" />
      </Box>
      <Box className="illustration-box illustration-box-88">
        <Pictogram animationDelay=".6s" iconName="icon-wind-power" />
      </Box>
      <Box className="illustration-box illustration-box-89"></Box>
      <Box className="illustration-box illustration-box-90"></Box>
      {/*
       * Row 6
       */}
      <Box className="illustration-box illustration-box-91"></Box>
      <Box className="illustration-box illustration-box-92"></Box>
      <Box className="illustration-box illustration-box-93"></Box>
      <Box className="illustration-box illustration-box-94"></Box>
      <Box className="illustration-box illustration-box-95"></Box>
      <Box className="illustration-box illustration-box-96"></Box>
      <Box className="illustration-box illustration-box-97"></Box>
      <Box className="illustration-box illustration-box-98">
        <Pictogram animationDelay="-0.9s" iconName="icon-nuclear-power" />
      </Box>
      <Box className="illustration-box illustration-box-99"></Box>
      <Box className="illustration-box illustration-box-100"></Box>
      <Box className="illustration-box illustration-box-101"></Box>
      <Box className="illustration-box illustration-box-102"></Box>
      <Box className="illustration-box illustration-box-103"></Box>
      <Box className="illustration-box illustration-box-104"></Box>
      <Box className="illustration-box illustration-box-105"></Box>
      <Box className="illustration-box illustration-box-106">
        <Pictogram animationDelay=".2s" iconName="icon-wind-power" />
      </Box>
      <Box className="illustration-box illustration-box-107"></Box>
      <Box className="illustration-box illustration-box-108"></Box>
      {/*
       * Row 7
       */}
      <Box className="illustration-box illustration-box-109"></Box>
      <Box className="illustration-box illustration-box-110"></Box>
      <Box className="illustration-box illustration-box-111"></Box>
      <Box className="illustration-box illustration-box-112"></Box>
      <Box className="illustration-box illustration-box-113"></Box>
      <Box className="illustration-box illustration-box-114"></Box>
      <Box className="illustration-box illustration-box-115"></Box>
      <Box className="illustration-box illustration-box-116"></Box>
      <Box className="illustration-box illustration-box-117"></Box>
      <Box className="illustration-box illustration-box-118"></Box>
      <Box className="illustration-box illustration-box-119"></Box>
      <Box className="illustration-box illustration-box-120">
        <Pictogram iconName="icon-solar-power" />
      </Box>
      <Box className="illustration-box illustration-box-121"></Box>
      <Box className="illustration-box illustration-box-122"></Box>
      <Box className="illustration-box illustration-box-123"></Box>
      <Box className="illustration-box illustration-box-124"></Box>
      <Box className="illustration-box illustration-box-125"></Box>
      <Box className="illustration-box illustration-box-126"></Box>
      {/*
       * Row 8
       */}

      <Box className="illustration-box illustration-box-127"></Box>
      <Box className="illustration-box illustration-box-128"></Box>
      <Box className="illustration-box illustration-box-129"></Box>
      <Box className="illustration-box illustration-box-130"></Box>
      <Box className="illustration-box illustration-box-131"></Box>
      <Box className="illustration-box illustration-box-132"></Box>
      <Box className="illustration-box illustration-box-133"></Box>
      <Box className="illustration-box illustration-box-134"></Box>
      <Box className="illustration-box illustration-box-135">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-136">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-137"></Box>
      <Box className="illustration-box illustration-box-138"></Box>
      <Box className="illustration-box illustration-box-139"></Box>
      <Box className="illustration-box illustration-box-140">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-141"></Box>
      <Box className="illustration-box illustration-box-142"></Box>
      <Box className="illustration-box illustration-box-143"></Box>
      <Box className="illustration-box illustration-box-144"></Box>

      {/*
       * Row 9
       */}

      <Box className="illustration-box illustration-box-145"></Box>
      <Box className="illustration-box illustration-box-146"></Box>
      <Box className="illustration-box illustration-box-147"></Box>
      <Box className="illustration-box illustration-box-148"></Box>
      <Box className="illustration-box illustration-box-149"></Box>
      <Box className="illustration-box illustration-box-150"></Box>
      <Box className="illustration-box illustration-box-151"></Box>
      <Box className="illustration-box illustration-box-152"></Box>
      <Box className="illustration-box illustration-box-153">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-154">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-155"></Box>
      <Box className="illustration-box illustration-box-156"></Box>
      <Box className="illustration-box illustration-box-157"></Box>
      <Box className="illustration-box illustration-box-158">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-159"></Box>
      <Box className="illustration-box illustration-box-160"></Box>
      <Box className="illustration-box illustration-box-161">
        <Pictogram iconName="icon-solar-power" animationDelay=".2" />
      </Box>
      <Box className="illustration-box illustration-box-162"></Box>

      {/*
       * Row 10
       */}

      <Box className="illustration-box illustration-box-163"></Box>
      <Box className="illustration-box illustration-box-164"></Box>
      <Box className="illustration-box illustration-box-165"></Box>
      <Box className="illustration-box illustration-box-166"></Box>
      <Box className="illustration-box illustration-box-167"></Box>
      <Box className="illustration-box illustration-box-168"></Box>
      <Box className="illustration-box illustration-box-169"></Box>
      <Box className="illustration-box illustration-box-170"></Box>
      <Box className="illustration-box illustration-box-171">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-172">
        <Pictogram animationDelay="-0.1s" iconName="icon-nuclear-power" />
      </Box>
      <Box className="illustration-box illustration-box-173"></Box>
      <Box className="illustration-box illustration-box-174"></Box>
      <Box className="illustration-box illustration-box-175"></Box>
      <Box className="illustration-box illustration-box-176"></Box>
      <Box className="illustration-box illustration-box-177"></Box>
      <Box className="illustration-box illustration-box-178"></Box>
      <Box className="illustration-box illustration-box-179"></Box>
      <Box className="illustration-box illustration-box-180"></Box>

      {/*
       * Row 11
       */}

      <Box className="illustration-box illustration-box-181"></Box>
      <Box className="illustration-box illustration-box-182"></Box>
      <Box className="illustration-box illustration-box-183"></Box>
      <Box className="illustration-box illustration-box-184"></Box>
      <Box className="illustration-box illustration-box-185"></Box>
      <Box className="illustration-box illustration-box-186"></Box>
      <Box className="illustration-box illustration-box-187">
        <Pictogram animationDelay=".2s" iconName="icon-wind-power" />
      </Box>
      <Box className="illustration-box illustration-box-188"></Box>
      <Box className="illustration-box illustration-box-189"></Box>
      <Box className="illustration-box illustration-box-190"></Box>
      <Box className="illustration-box illustration-box-191"></Box>
      <Box className="illustration-box illustration-box-192">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-193"></Box>
      <Box className="illustration-box illustration-box-194"></Box>
      <Box className="illustration-box illustration-box-195"></Box>
      <Box className="illustration-box illustration-box-196">
        <Pictogram animationDelay="-0.3s" iconName="icon-nuclear-power" />
      </Box>
      <Box className="illustration-box illustration-box-197"></Box>
      <Box className="illustration-box illustration-box-198"></Box>
      {/*
       * Row 12
       */}

      <Box className="illustration-box illustration-box-199"></Box>
      <Box className="illustration-box illustration-box-200"></Box>
      <Box className="illustration-box illustration-box-201"></Box>
      <Box className="illustration-box illustration-box-202"></Box>
      <Box className="illustration-box illustration-box-203"></Box>
      <Box className="illustration-box illustration-box-204"></Box>
      <Box className="illustration-box illustration-box-205"></Box>
      <Box className="illustration-box illustration-box-206"></Box>
      <Box className="illustration-box illustration-box-207">
        <Pictogram iconName="icon-hydro-power" />
      </Box>
      <Box className="illustration-box illustration-box-208"></Box>
      <Box className="illustration-box illustration-box-209"></Box>
      <Box className="illustration-box illustration-box-210"></Box>
      <Box className="illustration-box illustration-box-211"></Box>
      <Box className="illustration-box illustration-box-212">
        <Pictogram iconName="icon-data-center-loading" />
      </Box>
      <Box className="illustration-box illustration-box-213">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-214">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-215"></Box>
      <Box className="illustration-box illustration-box-216"></Box>

      {/*
       * Row 13
       */}

      <Box className="illustration-box illustration-box-217"></Box>
      <Box className="illustration-box illustration-box-218"></Box>
      <Box className="illustration-box illustration-box-219"></Box>
      <Box className="illustration-box illustration-box-220"></Box>
      <Box className="illustration-box illustration-box-221"></Box>
      <Box className="illustration-box illustration-box-222"></Box>
      <Box className="illustration-box illustration-box-223"></Box>
      <Box className="illustration-box illustration-box-224"></Box>
      <Box className="illustration-box illustration-box-225"></Box>
      <Box className="illustration-box illustration-box-226"></Box>
      <Box className="illustration-box illustration-box-227"></Box>
      <Box className="illustration-box illustration-box-228"></Box>
      <Box className="illustration-box illustration-box-229"></Box>
      <Box className="illustration-box illustration-box-230"></Box>
      <Box className="illustration-box illustration-box-231"></Box>
      <Box className="illustration-box illustration-box-232"></Box>
      <Box className="illustration-box illustration-box-233"></Box>
      <Box className="illustration-box illustration-box-234"></Box>

      {/*
       * Row 14
       */}

      <Box className="illustration-box illustration-box-235"></Box>
      <Box className="illustration-box illustration-box-236"></Box>
      <Box className="illustration-box illustration-box-237"></Box>
      <Box className="illustration-box illustration-box-238"></Box>
      <Box className="illustration-box illustration-box-239"></Box>
      <Box className="illustration-box illustration-box-240">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-241"></Box>
      <Box className="illustration-box illustration-box-242"></Box>
      <Box className="illustration-box illustration-box-243"></Box>
      <Box className="illustration-box illustration-box-244"></Box>
      <Box className="illustration-box illustration-box-245"></Box>
      <Box className="illustration-box illustration-box-246"></Box>
      <Box className="illustration-box illustration-box-247"></Box>
      <Box className="illustration-box illustration-box-248"></Box>
      <Box className="illustration-box illustration-box-249"></Box>
      <Box className="illustration-box illustration-box-250"></Box>
      <Box className="illustration-box illustration-box-251"></Box>
      <Box className="illustration-box illustration-box-252"></Box>

      {/*
       * Row 15
       */}

      <Box className="illustration-box illustration-box-253"></Box>
      <Box className="illustration-box illustration-box-254">
        <Pictogram iconName="icon-hydro-power" />
      </Box>
      <Box className="illustration-box illustration-box-255"></Box>
      <Box className="illustration-box illustration-box-256"></Box>
      <Box className="illustration-box illustration-box-257"></Box>
      <Box className="illustration-box illustration-box-258"></Box>
      <Box className="illustration-box illustration-box-259"></Box>
      <Box className="illustration-box illustration-box-260"></Box>
      <Box className="illustration-box illustration-box-261"></Box>
      <Box className="illustration-box illustration-box-262"></Box>
      <Box className="illustration-box illustration-box-263"></Box>
      <Box className="illustration-box illustration-box-264"></Box>
      <Box className="illustration-box illustration-box-265"></Box>
      <Box className="illustration-box illustration-box-266">
        <Pictogram iconName="icon-solar-power" animationDelay=".5" />
      </Box>
      <Box className="illustration-box illustration-box-267">
        <Pictogram iconName="icon-solar-power" />
      </Box>
      <Box className="illustration-box illustration-box-268"></Box>
      <Box className="illustration-box illustration-box-269"></Box>
      <Box className="illustration-box illustration-box-270"></Box>

      {/*
       * Row 16
       */}

      <Box className="illustration-box illustration-box-271"></Box>
      <Box className="illustration-box illustration-box-272"></Box>
      <Box className="illustration-box illustration-box-273"></Box>
      <Box className="illustration-box illustration-box-274"></Box>
      <Box className="illustration-box illustration-box-275"></Box>
      <Box className="illustration-box illustration-box-276"></Box>
      <Box className="illustration-box illustration-box-277"></Box>
      <Box className="illustration-box illustration-box-278"></Box>
      <Box className="illustration-box illustration-box-279">
        <Pictogram iconName="icon-data-center" />
      </Box>
      <Box className="illustration-box illustration-box-280"></Box>
      <Box className="illustration-box illustration-box-281"></Box>
      <Box className="illustration-box illustration-box-282"></Box>
      <Box className="illustration-box illustration-box-283"></Box>
      <Box className="illustration-box illustration-box-284"></Box>
      <Box className="illustration-box illustration-box-285"></Box>
      <Box className="illustration-box illustration-box-286"></Box>
      <Box className="illustration-box illustration-box-287"></Box>
      <Box className="illustration-box illustration-box-288"></Box>
    </PDPictogramGrid>
  )
}
